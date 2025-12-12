import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const TabAccordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div 
          key={index} 
          className="border border-gray-300 rounded-md"
        >
          <button
            className="w-full flex justify-between items-center p-2 px-3 text-left"
            onClick={() => toggle(index)}
          >
            <span className="font-semibold text-black">{item.title}</span>

            <FiChevronDown
              className={`text-xl transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
          {openIndex === index && (
            <div className="px-3 pb-3 pt-1 text-gray-500">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TabAccordion;
