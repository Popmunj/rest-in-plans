"use client";

import { useState, useRef } from "react";
import { jsPDF } from "jspdf";
import ".//THSarabunNew-normal.js";
import WarnTile from "@/components/WarnTile";
import { Warn } from "@/components/WarnTile";

interface DocumentGenProps {
  type: string;
  description: string;
  warnList: Warn[];
}

const DocumentGen: React.FC<DocumentGenProps> = ({
  type,
  description,
  warnList,
}) => {
  const [content, setContent] = useState("");
  const [name, setName] = useState("นางสาว หนิง หนิ่งหนิ๊ง");
  const [name1, setName1] = useState("");

  const contentRef = useRef<HTMLDivElement>(null);

  const handleSendToAPI = async () => {
    const response = await fetch("https://your-chatbot-api.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        message: content,
      }),
    });

    const data = await response.json();
    console.log("API Response:", data);
  };

  const handleExportPDF = () => {
    const doc = new jsPDF({ format: "a4", unit: "px" });

    doc.setFont("THSarabunNew", "normal");
    doc.setFontSize(13);
    doc.text(content, 40, 50, { maxWidth: 515 });
    doc.save("document.pdf");
  };

  return (
    <div className="flex flex-col max-h-500 pt-5 h-auto overflow-y-auto lg:flex-row w-screen h-screen bg-gray-100">
      <div
        className="flex-[2] p-5 bg-white shadow-md border-r rounded-lg flex flex-col items-start\
      space-y-4"
      >
        <h1>
          {type} <p className="text-gray-500 text-base">{description}</p>
        </h1>
        <h2 className="text-xl font-semibold mb-4">ข้อควรรู้</h2>
        {warnList.map((warning, index) => (
          <WarnTile key={index} warning={warning} />
        ))}

        {/*will specific */}
        <h2 className="text-xl font-semibold mb-4">ข้อมูลส่วนตัว</h2>

        <div className="mb-4 w-full">
          <label className="block text-gray-700">ชื่อ-สกุล</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2  border focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
            placeholder="ชื่อ-สกุล"
          />
        </div>
        {type === "พินัยกรรม (แบบธรรมดา)" ? (
          <div>
            <h2 className="text-xl font-semibold mb-4">ข้อมูลพยานคนที่ 1</h2>

            <div className="mb-4 w-full">
              <label className="block text-gray-700">ชื่อ-สกุล</label>
              <input
                type="text"
                value={name1}
                onChange={(e) => setName1(e.target.value)}
                className="w-full p-2 border focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
                placeholder="ชื่อ-สกุล"
              />
            </div>

            <h2 className="text-xl font-semibold mb-4">ข้อมูลพยานคนที่ 2</h2>

            <div className="mb-4 w-full">
              <label className="block text-gray-700">ชื่อ-สกุล</label>
              <input
                type="text"
                value={name1}
                onChange={(e) => setName1(e.target.value)}
                className="w-full p-2 border focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
                placeholder="ชื่อ-สกุล"
              />
            </div>
          </div>
        ) : null}

        {type === "DNR (คำสั่งปฏิเสธการกู้ชีพ)" ? (
          <div>
            <h2 className="text-xl font-semibold mb-4">ข้อมูลพยานคนที่ 1</h2>

            <div className="mb-4 w-full">
              <label className="block text-gray-700">ชื่อ-สกุล</label>
              <input
                type="text"
                value={name1}
                onChange={(e) => setName1(e.target.value)}
                className="w-full p-2 border focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
                placeholder="ชื่อ-สกุล"
              />
            </div>
          </div>
        ) : null}
        {/*will specific */}
        <button
          onClick={handleSendToAPI}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition"
        >
          ยืนยันตัวตน
        </button>

        <button
          onClick={handleSendToAPI}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition"
        >
          ร่างเอกสาร
        </button>
        <button
          onClick={handleExportPDF}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition"
        >
          ดาวน์โหลด PDF
        </button>
      </div>

      <div className="flex-[3] p-5">
        <div
          ref={contentRef}
          contentEditable
          onInput={(e) => setContent(e.currentTarget.innerText)}
          className="w-full p-4 outline-none text-gray-800 text-lg"
        />
        {content ? null : (
          <p className="text-gray-500 text-base pointer-events-none">
            ร่างด้วยตนเองที่นี่...
          </p>
        )}
      </div>
    </div>
  );
};

export default DocumentGen;
