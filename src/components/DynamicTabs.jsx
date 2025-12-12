import React, { useState } from "react";
import { BiGridVertical } from "react-icons/bi";
import { FiEdit2 } from "react-icons/fi";
import { AiOutlinePlus, AiOutlineDown } from "react-icons/ai";
import { FiFilter, FiMoreVertical, FiFolder, FiEye } from "react-icons/fi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { MdGridView } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";

export default function DynamicTabs() {
  const [tabs, setTabs] = useState([
    { id: 1, title: "Tab 1" },
    { id: 2, title: "Tab 2" },
    { id: 3, title: "Tab 3" },
  ]);

  const [activeTab, setActiveTab] = useState(0);

  const addTab = () => {
    const newId = tabs.length + 1;
    setTabs([...tabs, { id: newId, title: `Tab ${newId}` }]);
    setActiveTab(newId);
  };

  const renameTab = (id) => {
    const name = prompt("Enter new tab name:");
    if (name) {
      setTabs(tabs.map((t) => (t.id === id ? { ...t, title: name } : t)));
    }
  };

  return (
    <div className="w-full py-2">
      {/* ---------------------- TABS HEADER ---------------------- */}

      <div className="flex items-center gap-2 flex-wrap py-2 bg-white rounded-xs">
        <div className="flex items-center gap-2 px-3 py-1.5 border border-gray-300 bg-gray-100  rounded-xs cursor-pointer transition border-blue-400">
          <MdGridView size={16} className="text-gray-600" />

          <span className="text-gray-800 text-sm font-medium">Tabs</span>

          <AiOutlineInfoCircle size={16} className="text-gray-500" />
        </div>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`flex items-center gap-2 px-3 py-1.5 border border-gray-300  rounded-xs cursor-pointer transition 
            ${
              activeTab === tab.id ? "bg-blue-50 border-blue-400" : "bg-white"
            }`}
          >
            <BiGridVertical size={16} className="text-gray-500" />

            <span
              className="text-gray-800 text-sm font-medium"
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.title}
            </span>

            <AiOutlineDown size={12} className="text-gray-500" />

            <div className="w-px h-4 bg-gray-300"></div>
            <FiEdit2
              size={14}
              onClick={() => renameTab(tab.id)}
              className="text-gray-500 cursor-pointer hover:text-black"
            />
          </div>
        ))}

        {/* ADD NEW TAB BUTTON */}
        <button
          onClick={addTab}
          className="bg-blue-700 text-white rounded-xs p-2 hover:bg-blue-600"
        >
          <AiOutlinePlus size={17} />
        </button>
      </div>
    </div>
  );
}
