import { FiTrash2, FiEdit2, FiChevronDown } from "react-icons/fi";
import { RxDragHandleDots2 } from "react-icons/rx";

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
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm shadow hover:bg-blue-700">
          + Add Jira Fields
        </button>

        <button className="px-4 py-2 bg-amber-100 text-amber-700 border border-amber-300 rounded-md text-sm hover:bg-amber-200">
          + Custom JQL Toggle
        </button>

        <button className="px-4 py-2 bg-green-100 text-green-700 border border-green-300 rounded-md text-sm hover:bg-green-200">
          + Saved Filter Toggle
        </button>
      </div>

      <hr className="my-4" />

      {/* Fields List */}
      <div className="flex flex-col gap-3">
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
            <FiTrash2 className="text-red-500 cursor-pointer" size={18} />
          </div>
        ))}
      </div>

      {/* Add Another Field */}
      <div className="flex justify-between items-center mt-6 text-sm">
        <button className="text-blue-600 hover:underline flex items-center gap-1">
          + Add Another Field
        </button>

        <button className="text-blue-700 hover:underline flex items-center gap-1">
          👥 Admin Setting
        </button>
      </div>
    </div>
  );
}
