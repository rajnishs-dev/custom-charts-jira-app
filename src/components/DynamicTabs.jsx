import React, { useState } from "react";
import { BiGridVertical } from "react-icons/bi";
import { FiEdit2 } from "react-icons/fi";
import { AiOutlinePlus, AiOutlineDown } from "react-icons/ai";
import { FiFilter, FiMoreVertical, FiFolder, FiEye } from "react-icons/fi";

export default function DynamicTabs() {
  const [tabs, setTabs] = useState([
    { id: 1, title: "Tab 1" },
    { id: 2, title: "Tab 2" },
    { id: 3, title: "Tab 3" },
  ]);

  const [activeTab, setActiveTab] = useState(1);

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
    <div className="w-full bg-gray-50 min-h-screen p-4">
      {/* ---------------------- TABS HEADER ---------------------- */}
      <div className="flex items-center gap-2 flex-wrap p-2 border bg-white rounded-md">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`flex items-center gap-2 px-3 py-1.5 border rounded-md cursor-pointer transition 
            ${
              activeTab === tab.id ? "bg-blue-50 border-blue-400" : "bg-white"
            }`}
          >
            <BiGridVertical size={16} className="text-gray-500" />

            <span onClick={() => setActiveTab(tab.id)}>{tab.title}</span>

            <AiOutlineDown size={12} className="text-gray-500" />

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
          className="bg-blue-600 text-white rounded-md p-2 hover:bg-blue-700"
        >
          <AiOutlinePlus size={18} />
        </button>
      </div>

      {/* ---------------------- MAIN SEARCH PANEL ---------------------- */}
      <div className="mt-4 bg-white border rounded-md p-4">
        <h2 className="text-lg font-semibold mb-4">Simple Search</h2>

        {/* TOP FILTER ROW */}
        <div className="flex items-center gap-3 flex-wrap">
          {/* Filter Icon */}
          <button className="border p-2 rounded-md hover:bg-gray-100">
            <FiFilter size={18} />
          </button>

          {/* Dropdowns */}
          <select className="border px-3 py-2 rounded-md bg-white">
            <option>Project All</option>
          </select>

          <select className="border px-3 py-2 rounded-md bg-white">
            <option>Status All</option>
          </select>

          <input
            type="text"
            placeholder="Contains Text..."
            className="border px-3 py-2 rounded-md bg-white min-w-[200px]"
          />

          {/* Sort Button */}
          <button className="border p-2 rounded-md hover:bg-gray-100">
            <AiOutlineDown size={18} />
          </button>

          {/* Add Button */}
          <button className="border p-2 rounded-md hover:bg-gray-100">
            <AiOutlinePlus size={18} />
          </button>

          {/* Search Button */}
          <button className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700">
            Search
          </button>

          {/* More Options */}
          <button className="border p-2 rounded-md hover:bg-gray-100 ml-auto">
            <FiMoreVertical size={20} />
          </button>
        </div>

        {/* RESULTS FOOTER */}
        <div className="mt-10 border rounded-md p-4">
          <p className="text-green-600 text-sm font-medium mb-2">
            ● 91 Issues found
          </p>

          <div className="text-sm">
            <p>
              <span className="text-blue-600 font-medium">Source:</span> project
              IN ("DM","DEV")
            </p>

            <p className="mt-2">
              <span className="text-blue-600 font-medium">Selections:</span>
            </p>
          </div>

          <div className="flex items-center gap-3 mt-3">
            <button className="border p-2 rounded-md hover:bg-gray-100">
              <FiEdit2 size={16} />
            </button>

            <button className="border p-2 rounded-md hover:bg-gray-100">
              <FiFolder size={16} />
            </button>

            <button className="border p-2 rounded-md hover:bg-gray-100">
              <FiEye size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
