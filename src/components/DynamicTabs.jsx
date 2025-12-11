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
    <div className="w-full min-h-screen px-4 py-2">
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
          className="bg-blue-600 text-white rounded-xs p-2 hover:bg-blue-700"
        >
          <AiOutlinePlus size={17} />
        </button>
      </div>

      {/* ---------------------- MAIN SEARCH PANEL ---------------------- */}
      <div className="mt-2 bg-white border border-gray-300  rounded-xs p-3">
        <h2 className="text-lg font-semibold mb-4">Simple Search</h2>

        {/* TOP FILTER ROW */}
        <div className="flex items-center gap-3 flex-wrap">
          {/* Filter Icon */}
          <button className="border px-3 py-1.5 rounded-xs hover:bg-gray-100 border-gray-300 bg-gray-100">
            <FiFilter size={18} />
          </button>

          {/* Dropdowns */}
          <select className="border px-3 py-1 rounded-xs border-gray-300 bg-gray-100">
            <option>Project All</option>
          </select>

          <select className="border px-3 py-1 rounded-xs border-gray-300 bg-gray-100">
            <option>Status All</option>
          </select>

          <input
            type="text"
            placeholder="Contains Text..."
            className="border px-3 py-1 rounded-xs min-w-[200px] border-gray-300 placeholder-gray-900 bg-gray-100"
          />

          {/* Sort Button */}
          <button className="border p-2 rounded-xs hover:bg-gray-100 border-gray-300 bg-gray-100">
            <AiOutlineDown size={18} />
          </button>

          {/* Add Button */}
          <button className="border p-2 rounded-xs hover:bg-gray-100 border-gray-300 bg-gray-100">
            <AiOutlinePlus size={18} />
          </button>

          {/* Search Button */}
          <button className="bg-blue-600 text-white px-5 py-1.5 rounded-xs hover:bg-blue-700">
            Search
          </button>

          {/* More Options */}
          <button className="border p-2 rounded-xs hover:bg-gray-100 border-gray-300 ml-auto">
            <FiMoreVertical size={20} />
          </button>
        </div>

        {/* RESULTS FOOTER */}
        <div className="justify-between mt-40 py-4">
          <p className="text-blue-600 text-xs font-medium mb-2 flex items-center gap-1">
            <AiOutlineCheckCircle size={16} className="text-green-600" />
            91 Issues found
          </p>

          <div className="flex gap-20">
            <div className="w-full text-sm border border-gray-300 rounded-xs p-2">
              <p className="border-b border-[#d6d6d6] pb-[10px]">
                <span className="text-blue-600 font-medium">Source:</span>{" "}
                project IN ("DM","DEV")
              </p>

              <p className="mt-2">
                <span className="text-blue-600 font-medium">Selections:</span>
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button className="border p-2 rounded-xs hover:bg-gray-100 border-gray-300">
                <FiEdit2 size={16} />
              </button>

              <button className="border p-2 rounded-xs hover:bg-gray-100 border-gray-300">
                <FiFolder size={16} />
              </button>

              <button className="border p-2 rounded-xs hover:bg-gray-100 border-gray-300">
                <FiEye size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
