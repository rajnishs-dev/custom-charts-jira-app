import { FiTrash2, FiEdit2, FiChevronDown } from "react-icons/fi";
import { RxDragHandleDots2 } from "react-icons/rx";
import { FiUsers } from "react-icons/fi";

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
      {/* Top Buttons */}
      <div className="flex flex-wrap gap-3 mb-5">
        <button className="text-xs  bg-blue-700 text-white px-2 py-1.5 rounded-xs hover:bg-blue-600">
          + Add Jira Fields
        </button>

        <button className="text-xs px-2 py-1.5 rounded-xs border border-amber-300 hover:bg-amber-50">
          + Custom JQL Toggle
        </button>

        <button className="text-xs px-2 py-1.5 rounde-xs border border-green-300 hover:bg-green-50">
          + Saved Filter Toggle
        </button>
      </div>

      <hr className="my-4 text-gray-200" />

      {/* Fields List */}
      <div className="flex flex-col gap-3 pb-4">
        {fields.map((f, i) => (
          <div
            key={i}
            className={` flex items-center gap-3 bg-white shadow-sm border border-gray-300 rounded-xs px-3 py-2 text-sm  ${
              f.highlight ? "bg-blue-50" : ""
            }`}
          >
            {/* Drag Icon */}
            <RxDragHandleDots2 className="text-gray-500 text-xl cursor-move" />

            {/* Field Label */}
            <div className="flex-1 relative">
              {i === 0 ? (
                /* FIRST ROW = DROPDOWN */
                <select
                  className="w-full bg-transparent outline-none text-gray-700 text-sm 
                             cursor-pointer appearance-none pr-6"
                  defaultValue={f.label}
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
              ) : (
                /* OTHER ROWS = READONLY INPUT (UNCHANGED) */
                <input
                  type="text"
                  readOnly
                  placeholder="Select Field"
                  value={f.label}
                  className="w-full bg-transparent outline-none text-gray-700 text-sm"
                />
              )}

              {/* Dropdown arrow ONLY for first item */}
              {i === 0 && (
                <FiChevronDown className="absolute right-1 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none" />
              )}
            </div>

            {/* Edit icon for all except 1st */}
            {i !== 0 && (
              <FiEdit2 className="text-blue-600 cursor-pointer" size={16} />
            )}

            {/* Delete Icon */}
            {i === 0 && (
              <FiTrash2 className="text-red-500 cursor-pointer" size={18} />
            )}
            {i !== 0 && (
              <FiTrash2 className="text-black cursor-pointer" size={18} />
            )}
          </div>
        ))}
      </div>

      <hr className="my-2 text-gray-200" />

      {/* Add Another Field */}
      <div className="flex justify-between items-center text-sm">
        <button className="cursor-pointer flex items-center gap-1">
          + Add Another Field
        </button>

        <button className="cursor-pointer text-blue-700 flex items-center gap-1">
          <FiUsers size={16} />
          Admin Setting
        </button>
      </div>
    </div>
  );
}
