"use client";
import { useState } from "react";

export interface Warn {
  name: string;
  desc: string;
}

const WarnTile = ({ warning }: { warning: Warn }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-2 text-gray-500 border rounded-md shadow-base">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-base">{warning.name}</h2>
        <button className="text-blue-500 focus:outline-none">
          {isOpen ? "▲" : "▼"}
        </button>
      </div>

      {isOpen && <p className="">{warning.desc}</p>}
    </div>
  );
};
export default WarnTile;
