import { FiCheckCircle } from "react-icons/fi";

export default function ChartForm() {
  return (
    <div className="w-full bg-white">
      {/* GRID WRAPPER */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {/* Reference ID */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-700 mb-1">
            Reference ID
          </label>
          <input
            type="text"
            placeholder="D47B65"
            className="border border-gray-300 rounded-xs px-3 py-2 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none placeholder-gray-900"
          />
        </div>

        {/* Chart Title */}
        <div className="flex flex-col md:col-span-1">
          <label className="text-sm font-semibold text-gray-700 mb-1">
            Chart Title
          </label>
          <input
            type="text"
            placeholder="Your chart title here..."
            className="border border-gray-300 rounded-xs px-3 py-2 text-sm w-full focus:ring-2 focus:ring-blue-400 focus:outline-none placeholder-gray-900"
          />
        </div>

        {/* Title Alignment */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-700 mb-1">
            Title Alignment
          </label>
          <select className="border border-gray-300 rounded-xs px-3 py-2 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none placeholder-gray-900">
            <option>Left</option>
            <option>Center</option>
            <option>Right</option>
          </select>
        </div>

        {/* Source */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-700 mb-1">
            Source
          </label>
          <select className="border border-gray-300 rounded-xs px-3 py-2 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none placeholder-gray-900">
            <option>Projects</option>
            <option>Issues</option>
            <option>Sprints</option>
          </select>
        </div>

        {/* Search Project */}
        <div className="flex flex-col md:col-span-2">
          <label className="text-sm font-semibold text-gray-700 mb-1">
            Search Project
          </label>

          <div className="flex items-center gap-2 w-full">
            <select className="border border-gray-300 rounded-xs px-3 py-2 text-sm w-full focus:ring-2 focus:ring-blue-400 focus:outline-none">
              <option>App (APP), AppVantage (AP)</option>
              <option>Backend</option>
              <option>Frontend</option>
            </select>

            {/* Status Indicator */}
            <div className="flex items-center gap-1 whitespace-nowrap">
              <FiCheckCircle className="text-green-500" size={18} />
              <span className="text-xs text-blue-600 font-medium">
                91 Issues found
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
