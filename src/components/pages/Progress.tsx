"use client";

import { useState } from "react";
import DropButton from "../DropButton";

const Progress = () => {
  const tasks = [
    {
      id: 0,
      name: "แผนมรดก",
      desc: "desc",
      status: "เสร็จสิ้น",
    },
    {
      id: 1,
      name: "หนังสือมอบอำนาจทางการเงิน",
      desc: "desc",
      status: "ยังไม่เสร็จ",
    },
    {
      id: 2,
      name: "การกำหนดผู้รับผลประโยชน์",
      desc: "desc",
      status: "ยังไม่เสร็จ",
    },
  ];

  const tasks2 = [
    {
      id: 0,
      name: "เลือกตัวแทน",
      desc: "desc",
      status: "เสร็จสิ้น",
    },
    {
      id: 1,
      name: "วางแผนงานศพ",
      desc: "desc",
      status: "ยังไม่เสร็จ",
    },
    {
      id: 2,
      name: "เก็บความในใจให้คนในดวงใจ",
      desc: "desc",
      status: "ยังไม่เสร็จ",
    },
    {
      id: 2,
      name: "สมุดเป้าหมาย",
      desc: "desc",
      status: "ยังไม่เสร็จ",
    },
  ];
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
      <div className="w-full max-w-xs p-4 bg-white shadow-md rounded-lg border border-gray-300 flex flex-col items-center">
        <div className="text-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">
            สถานะการดำเนินการของคุณ
          </h2>
        </div>
        <div className="w-full max-h-60 h-auto overflow-y-auto">
          <DropButton label="รายการนิติกรรม" taskList={tasks} />
          <DropButton label="รายการ Planner" taskList={tasks2} />
        </div>
      </div>
    </>
  );
};

export default Progress;
