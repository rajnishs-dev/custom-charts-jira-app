import React from "react";
import { FiTrash2, FiEdit2, FiChevronDown } from "react-icons/fi";
import { RxDragHandleDots2 } from "react-icons/rx";
import { FaUserCog } from "react-icons/fa";
import { BiGridVertical } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";

export default function FieldBuilderSection() {
  const fields = [
    { label: "Select Field", highlight: true },
    { label: "Select Field..." },
    { label: "Project" },
    { label: "Status" },
    { label: "Contain Text..." },
    { label: "Status" },
    { label: "Summary" },
  ];

  return (
    <div className="w-full">
      {/* TOP BUTTONS */}
      <div className="flex flex-wrap gap-3 mb-5">
        <button className="text-xs bg-blue-700 text-white px-2 py-1.5 rounded-xs hover:bg-blue-600">
          + Add Jira Fields
        </button>

        <button className="text-xs px-2 py-1.5 rounded-xs border border-amber-300 hover:bg-amber-50">
          + Custom JQL Toggle
        </button>

        <button className="text-xs px-2 py-1.5 rounded-xs border border-green-300 hover:bg-green-50">
          + Saved Filter Toggle
        </button>
      </div>

      <hr className="my-4 text-gray-200" />

      {/* FIELD LIST */}
      <div className="flex flex-col gap-3 pb-4">
        {fields.map((f, i) => (
          <div key={i} className={"flex items-center gap-2 px-2 py-1.5 "}>
            {/* MAIN CONTENT */}
            <div className="flex-1 relative ">
              {i === 0 ? (
                /* ============= FIRST ROW = DROPDOWN ============= */
                <div className="relative w-full ">
                  <RxDragHandleDots2 className="text-gray-600 text-xl cursor-move absolute inset-y-0 left-[12px] my-auto" />

                  <select
                    defaultValue={f.label}
                    className="
                      w-full bg-blue-50 text-gray-700 text-sm rounded-md
                      border border-gray-300 pl-9 pr-8 py-2
                      appearance-none cursor-pointer
                      shadow-sm hover:bg-gray-50
                      focus:outline-none focus:ring-2 focus:ring-blue-500
                      transition-all
                      
                    "
                  >
                    <option value="Select Field" disabled>
                      Select Field
                    </option>
                    <option>Project</option>
                    <option>Status</option>
                    <option>Summary</option>
                    <option>Assignee</option>
                    <option>Contain Text...</option>
                  </select>

                  {/* Dropdown icon */}
                  <FiChevronDown
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none"
                    size={18}
                  />
                </div>
              ) : (
                /* ================= OTHER ROWS = READONLY BOX ================= */

                <div
                  className="
                    w-full bg-gray-100 text-gray-700 text-sm rounded-md
                    border border-gray-300 px-3 py-2 cursor-default select-none flex gap-1
                  "
                >
                  <RxDragHandleDots2 className="text-gray-600 text-xl cursor-move" />
                  {f.label}
                </div>
              )}
            </div>

            {/* EDIT ICON (except first row) */}
            {i !== 0 && (
              <FiEdit2 size={16} className="text-blue-600 cursor-pointer" />
            )}

            {/* DELETE ICON (red for first, black for others) */}
            {i === 0 ? (
              //   <FiTrash2 size={18} className="text-red-500 cursor-pointer" />
              <button
                onClick={() => onDelete(gadget.id)}
                className="p-2 rounded hover:bg-red-50 text-red-600 transition-colors"
                title="Delete Gadget"
              >
                <AiOutlineDelete className="h-5 w-5 cursor-pointer" />
              </button>
            ) : (
              //   <FiTrash2 size={18} className="text-gray-700 cursor-pointer" />
              <button
                onClick={() => onDelete(gadget.id)}
                className="p-2 rounded hover:bg-red-50 text-gray-400 hover:text-red-600 transition-colors"
                title="Delete Gadget"
              >
                <AiOutlineDelete className="h-5 w-5 cursor-pointer" />
              </button>
            )}
          </div>
        ))}
      </div>

      <hr className="my-2 text-gray-200" />

      {/* BOTTOM ACTION BAR */}
      <div className="flex justify-between items-center text-md">
        <button className="cursor-pointer flex items-center gap-1">
          + Add Another Field
        </button>

        <button className="cursor-pointer text-blue-700 flex items-center gap-1">
          <FaUserCog className="w-4 h-4" />
          Admin Setting
        </button>
      </div>
    </div>
  );
}
