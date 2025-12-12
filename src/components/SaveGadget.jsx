import React from "react";

function SaveGadget() {
  return (
    <div className="flex items-center justify-end gap-3 px-4 pb-4">
      <button className="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-black bg-gray-200 hover:bg-gray-300 cursor-pointer transition duration-150 ease-in-out">
        Cancel
      </button>
      <button className="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#0052CC] hover:bg-blue-800 cursor-pointer transition duration-150 ease-in-out">
        Save Gadget
      </button>
    </div>
  );
}

export default SaveGadget;
