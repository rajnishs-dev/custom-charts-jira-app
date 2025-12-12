import React from "react";
import { HiCheck, HiX } from "react-icons/hi";

const ToggleSwitch = ({ checked, onChange }) => {
  return (
    <label className="relative inline-flex items-center cursor-pointer select-none w-10 h-5">

      <input
        type="checkbox"
        className="peer sr-only"
        checked={checked}
        onChange={onChange}
      />

      <div
        className="
          absolute inset-0 rounded-full 
          bg-gray-400 peer-checked:bg-green-600
          transition-colors duration-300
        "
      ></div>

      <HiCheck
        className="
          absolute left-1 text-white text-sm
          opacity-0 peer-checked:opacity-100
          transition-opacity duration-200
        "
      />

      <HiX
        className="
          absolute right-1 text-white text-sm
          opacity-100 peer-checked:opacity-0
          transition-opacity duration-200
        "
      />

      <div
        className="
          absolute w-4 h-4 bg-white rounded-full shadow-md
          transform transition-all duration-300
          translate-x-1 peer-checked:translate-x-5
        "
      ></div>

    </label>
  );
};

export default ToggleSwitch;
