import React from "react";
import { BiGridVertical } from "react-icons/bi";
import { FiEdit2 } from "react-icons/fi";
import { AiOutlinePlus, AiOutlineDown } from "react-icons/ai";
import { FiFilter, FiMoreVertical, FiFolder, FiEye } from "react-icons/fi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { MdGridView } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BsShare, BsQuestionCircle } from "react-icons/bs";

function MainSearchPannel() {
  return (
    <>
      {/* ---------------------- MAIN SEARCH PANEL ---------------------- */}
      <div className="bg-white border border-gray-300  rounded-xs p-4 flex flex-col h-full">
        <h2 className="text-lg font-semibold mb-4">Simple Search</h2>

        <div className="flex flex-col h-full">
          {/* TOP FILTER ROW */}
          <div className="flex items-center gap-3 flex-wrap ">
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
            <button className="bg-blue-700 text-white px-5 py-1.5 rounded-xs hover:bg-blue-600">
              Search
            </button>

            {/* More Options */}
            <button className="border p-2 rounded-xs hover:bg-gray-100 border-gray-300 ml-auto">
              <FiMoreVertical size={20} />
            </button>
          </div>

          {/* RESULTS FOOTER */}
          <div className="justify-between pt-2 mt-auto">
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

            <div className="justify-items-end">
              <BsQuestionCircle className="h-5 w-5 hover:text-gray-700 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainSearchPannel;
