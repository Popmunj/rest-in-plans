"use client";
import Footer from "@/components/Footer";
import HeaderTabs from "@/components/HeaderTabs";
import React, { useState } from "react";
import Button from "@/components/Button";
const Identity = () => {
  const [age, setAge] = useState("20");
  const [occupation, setOccupation] = useState("");
  const handleChangeO = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOccupation(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const [status, setStatus] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value);
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
            <h2 className="text-2xl font-bold text-center mb-6">
              ข้อมูลเบื้องต้น
              <p className="text-base">
                เราต้องการปรับข้อมูลให้ตรงกับสถานการณ์ของคุณ
              </p>
            </h2>

            <div className="mb-4">
              <label
                htmlFor="age"
                className="blockห text-sm font-medium text-gray-700"
              >
                อายุ
              </label>
              <input
                id="age"
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="status"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                สถานะ
              </label>
              <select
                id="status"
                value={status}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">เลือกสถานะของคุณ</option>
                <option value="single">โสด</option>
                <option value="married">แต่งงานแล้ว</option>
                <option value="divorced">หย่าร้าง</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="occupation"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                อาชีพ
              </label>
              <select
                id="occupation"
                value={occupation}
                onChange={handleChangeO}
                className="w-full px-4 py-2 border rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">เลือกอาชีพของคุณ</option>
                <option value="none">ไม่มี</option>
                <option value="employee">พนักงานบริษัท</option>
                <option value="owner">มีกิจการเป็นของตัวเอง</option>
                <option value="freelancer">ฟรีแลนซ์</option>
                <option value="government">รับราชการ</option>
                <option value="more">มากกว่าหนึ่งอย่าง</option>
                <option value="nosay">ไม่ประสงค์ระบุ</option>
              </select>
            </div>

            <div className="flex flex-row justify-center">
              <Button
                className="bg-indigo-900"
                route="../home"
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

export default Identity;
