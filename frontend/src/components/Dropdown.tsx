import React, { useState } from "react";
import { FaSortDown } from "react-icons/fa";

export interface DropdownProps {
  width: string;
  label: string;
  options: string[];
  onSelect: (selectedOption: string) => void;
  optionWidth: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  width,
  label,
  options,
  onSelect,
  optionWidth,
}) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleOptionSelection = (option: string) => {
    setDropdownOpen(false);
    onSelect(option);
  };

  return (
    <div className="mb-4">
      <button
        onClick={toggleDropdown}
        className={`flex text-gray-800 rounded-sm px-2 py-1 border border-gray-800 bg-white w-${width} justify-between`}
      >
        {label} <FaSortDown />
      </button>
      {isDropdownOpen && (
        <div
          className={`absolute mt-2 bg-white rounded-sm border border-gray-800 w-${optionWidth} max-h-40 overflow-y-auto`}
        >
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleOptionSelection(option)}
              className="px-2 py-1 cursor-pointer hover:bg-gray-200"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
