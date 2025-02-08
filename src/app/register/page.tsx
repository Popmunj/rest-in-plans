"use client";
import HeaderTabs from "@/components/HeaderTabs";
import React, { useState } from "react";
import Button from "@/components/Button";
import Footer from "@/components/Footer";

const Page = () => {
  const [name, setName] = useState("หนิง หนื่งหนิ๊ง");
  const [email, setEmail] = useState("ningningtechy@gmail.com");
  const [phone, setPhone] = useState("111111111");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <>
      <HeaderTabs isIn={false} />
      <main className="flex flex-col w-screen h-screen p-5">
        <div className="flex justify-center items-center h-screen bg-gray-100">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
          >
            <h2 className="text-2xl font-bold text-center mb-4">
              เริ่มการวางแผน
              <p className="text-base">
                เตรียมตัวยืนยันตัวตนผ่าน OTP และการสแกนใบหน้า
              </p>
            </h2>

            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                ชื่อ-สกุล
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                อีเมล
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                เบอร์
              </label>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 py-2">
                อัปโหลดบัตรประชาชน
              </label>

              <div className="relative border-dashed border-2 border-gray-300 rounded-lg p-4 text-center">
                <input
                  type="file"
                  accept="image/*"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  onChange={handleFileChange}
                />

                <button
                  type="button"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  เลือกไฟล์
                </button>

                {file && (
                  <p className="mt-2 text-sm text-gray-600">{file.name}</p>
                )}
              </div>
            </div>
            <div className="flex flex-row justify-center">
              <Button
                className="bg-blue-900"
                route="register/identity"
                onClick={handleSubmit}
              >
                ต่อไป
              </Button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Page;
