import { FiCopy } from "react-icons/fi";
import {
  BsDownload,
} from "react-icons/bs";
import { FaUserCog } from "react-icons/fa";

export const ImportExportTabContent = () => {
  return <>
  <div className="">    
    <div className="pb-4 border-b border-gray-300">
        <h3 className="text-md font-medium mb-3">Export Shared Dashboard Configuration</h3>
        <button className="flex items-center px-3 py-2 text-sm font-medium cursor-pointer bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition duration-150">
            Copy to Clipboard <FiCopy className="ml-2" />
        </button> 
    </div>

    <div className="pt-4">
        <h3 className="text-md font-medium mb-3">Import Shared Dashboard Configuration</h3>
        <div className="pb-2 mb-3 border-b border-gray-300">
        <textarea 
            placeholder="Paste Shared Dashboard exported configuration here..." 
            rows="7" 
            className="w-full border border-gray-300 p-2 rounded"
        />
        </div>
        <div className="flex justify-end">
            <button className="flex items-center px-4 py-2 bg-gray-300 text-gray-600 font-medium text-sm rounded cursor-pointer">
                <BsDownload className="mr-2" />
                Import Configurations
            </button>
        </div>
    </div>
  </div>
   <div className="mt-4">
        <a
          href="/"
          className="
        flex items-center justify-end space-x-1.5 
        text-blue-600 hover:text-blue-800 
        font-medium border-t border-gray-300
        transition-colors duration-200 
        py-4 pb-0
      "
        >
          <FaUserCog className="w-5 h-5" />

          <span>Admin Setting</span>
        </a>
      </div>
  </>;
};
