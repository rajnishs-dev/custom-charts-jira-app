import React from 'react';

export const ImportExportContent = () => (
  <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md">
    <h2 className="text-lg font-semibold mb-4">Import/Export Configuration</h2>
    
    <div className="mb-6">
        <h3 className="text-md font-medium mb-2">Export Shared Dashboard Configuration</h3>
        <button className="flex items-center px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition duration-150">
            Copy to Clipboard 📋
        </button>
    </div>

    <div>
        <h3 className="text-md font-medium mb-2">Import Shared Dashboard Configuration</h3>
        <textarea 
            placeholder="Paste Shared Dashboard exported configuration here..." 
            rows="5" 
            className="w-full border border-gray-300 p-2 rounded mb-3"
        />
        <div className="text-right">
            <button className="px-4 py-2 bg-gray-300 text-gray-600 rounded cursor-not-allowed">
                Import Configurations
            </button>
        </div>
    </div>
  </div>
);

export const PlaceholderContent = ({ tabName }) => (
    <div className="p-6 text-center bg-white border border-gray-200 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-gray-700">Content for "{tabName}"</h2>
        <p className="text-gray-500 mt-2">This is a placeholder for the content associated with this tab.</p>
    </div>
);