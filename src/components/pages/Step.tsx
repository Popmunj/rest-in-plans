"use client";
import { useState } from "react";
import DocTile from "../DocumentTile";

const Step = () => {
  const [docs, setDocs] = useState([
    {
      name: "พินัยกรรม (แบบธรรมดา)",
      description:
        "คำสั่งครั้งสุดท้าย ซึ่งแสดงเจตนากำหนดการเผื่อตายในเรื่องทรัพย์สินหรือ กิจการต่าง ๆ ของผู้ทำพินัยกรรม",
      tags: [
        { label: "พยาน 2 คน" },
        { label: "พิมพ์ได้" },
        { label: "บริการเก็บและส่ง" },
      ],
      route: "/will",
    },
    {
      name: "พินัยกรรม (แบบเขียนเองทั้งฉบับ)",
      description:
        "คำสั่งครั้งสุดท้าย ซึ่งแสดงเจตนากำหนดการเผื่อตายในเรื่องทรัพย์สินหรือ กิจการต่าง ๆ ของผู้ทำพินัยกรรม",
      tags: [
        { label: "ไม่ต้องมีพยาน" },
        { label: "เขียนมือเท่านั้น" },
        { label: "บริการเก็บและส่ง" },
        { label: "มีคําแนะนํา" },
      ],
      route: "/will-written",
    },
    {
      name: "DNR (คำสั่งปฏิเสธการกู้ชีพ)",
      description: "สัญญากำหนดวาระสุดท้ายของตนว่าต้องการจะเสียชีวิตแบบใด",
      tags: [
        { label: "พยาน 1 คน" },
        { label: "พิมพ์ได้" },

        { label: "มีคําแนะนํา" },
      ],
      route: "/dnr",
    },
  ]);
  return (
    <div className="flex flex-col items-center w-full h-full max-w-xs lg:max-w-5xl p-4 bg-white shadow-md rounded-lg border border-gray-300">
      <h1>คลังเอกสาร</h1>
      <div className="w-full py-2">
        {docs.map((doc, index) => (
          <DocTile
            route={doc.route}
            key={index}
            name={doc.name}
            description={doc.description}
            tags={doc.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Step;
