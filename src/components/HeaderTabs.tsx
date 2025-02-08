"use client";
import React, { useState } from "react";

interface TabProps {
  label: string;
  href: string;

  onClick: () => void;
}

interface HeaderTabsProps {
  isIn: boolean;
}

const Tab: React.FC<TabProps> = ({ label, href, onClick }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={
        "px-2 lg:px-4 text-base lg:text-lg font-light \
        transition-colors duration-300 hover:font-semibold\
        hover:underline decoration-blue-500"
      }
    >
      {label}
    </a>
  );
};

const HeaderTabs: React.FC<HeaderTabsProps> = ({ isIn }) => {
  const [activeTab, setActiveTab] = useState<string>("/");

  const handleTabClick = (href: string) => {
    setActiveTab(href);
  };

  return (
    <div className="flex border-b-2 w-screen pt-4 px-4 items-end justify-between">
      <div className="flex">
        <h1>RestInPlans</h1>
      </div>
      <div className="justify-end">
        <Tab
          label="เกี่ยวกับ"
          href="/about"
          onClick={() => handleTabClick("/")}
        />
        {isIn ? (
          <Tab
            label="ปรึกษาทนาย"
            href="/consult"
            onClick={() => handleTabClick("/consult")}
          />
        ) : null}
        {isIn ? (
          <Tab
            label="ปรึกษาทนาย AI"
            href="http://localhost:8501/"
            onClick={() => handleTabClick("http://localhost:8501/")}
          />
        ) : (
          <Tab
            label="เข้าสู่ระบบ"
            href="/register"
            onClick={() => handleTabClick("/about")}
          />
        )}
      </div>
    </div>
  );
};

export default HeaderTabs;
