import { FiMaximize, FiRefreshCw, FiLink } from "react-icons/fi";
import { MdOutlineViewColumn } from "react-icons/md";

export default function CustomHeader({ title }) {
  return (
    <div className="w-full flex items-center justify-between py-4 flex-wrap gap-3">
      {/* Title */}
      <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>

      {/* Right Icons Section */}
      <div className="flex items-center gap-3">
        {/* Fullscreen Icon */}
        <button className="p-2 rounded-xs bg-gray-100 hover:bg-gray-200 border border-gray-200">
          <FiMaximize className="text-gray-700 text-lg" />
        </button>

        {/* Columns / Layout Icon */}
        <button className="p-2 rounded-xs hover:bg-gray-100">
          <MdOutlineViewColumn className="text-gray-700 text-xl" />
        </button>

        {/* Refresh Icon */}
        <button className="p-2 rounded-xs hover:bg-gray-100">
          <FiRefreshCw className="text-gray-700 text-lg" />
        </button>

        {/* Link Icon */}
        <button className="p-2 rounded-xs hover:bg-gray-100">
          <FiLink className="text-gray-700 text-lg" />
        </button>
      </div>
    </div>
  );
}
