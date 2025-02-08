import { useState } from "react";

interface taskProps {
  id: number;
  name: string;
  desc: string;
  status: string;
}

interface DropButtonProps {
  taskList: taskProps[];
  label: String;
}

const DropButton: React.FC<DropButtonProps> = ({ taskList, label }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="py-2">
      <div
        onClick={toggleDropdown}
        className="text-sm text-gray-700 w-full h-full border p-4 rounded-lg hover:shadow-md hover:cursor-pointer"
      >
        {isDropdownOpen ? `ซ่อน${label}` : `ดู${label}`}
      </div>

      {isDropdownOpen && (
        <div className="w-full space-y-3">
          {taskList.map((task) => (
            <div
              key={task.id}
              className="flex justify-between items-center m-2 p-4 bg-gray-50 border rounded-md shadow-sm"
            >
              <div className="text-xs text-gray-700">{task.name}</div>
              <div
                className={`text-xs font-semibold ${
                  task.status === "เสร็จสิ้น"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {task.status}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropButton;
