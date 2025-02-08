"use client";
import { useState } from "react";
import HeaderTabs from "@/components/HeaderTabs";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

const Consult = () => {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>(
    []
  );
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };

    setMessages((prev) => [...prev, userMessage]);
    setMessages((prev) => [...prev, { sender: "bot", text: "กำลังพิมพ์..." }]);

    setInput("");

    setLoading(true);

    try {
      const response = await fetch("https://your-chatbot-api.com/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      const botMessage = {
        sender: "bot",
        text: data.reply || "ขออภัยค่ะ Server ไม่ตอบสนองค่ะ",
      };

      setMessages((prev) => [...prev.slice(0, -1), botMessage]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [...prev.slice(0, -1)]);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "ขออภัยค่ะ Server กําลังมีปัญหา" },
      ]);
    }
  };

  return (
    <>
      <HeaderTabs isIn />
      <main className="flex flex-col items-center w-screen relative overflow-auto pt-2 lg:pt-2 h-screen py-20 lg:py-10 px-5">
        <div className="flex flex-col w-full max-w-3xl border bg-white rounded-md shadow-md p-10">
          <div className="flex flex-col flex-grow w-full max-w-3xl mx-auto  p-4 overflow-y-auto h-[70vh]">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 my-1 max-w-xs ${
                  msg.sender === "user"
                    ? "bg-blue-500 text-white self-end rounded-bl-lg rounded-t-lg"
                    : "bg-gray-700 text-white self-start rounded-br-lg rounded-t-lg"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="flex w-full max-w-3xl mx-auto mt-4 space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              className="flex-grow p-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="ปรึกษาทนาย"
            />
            <button
              className={`px-4 py-2 rounded-lg text-xl bg-blue-700 text-white font-semibold transition-colors duration-300`}
              onClick={() => sendMessage()}
              type="button"
            >
              ส่ง
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Consult;
