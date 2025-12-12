import React from 'react';

export const PlaceholderContent = ({ tabName }) => (
    <div className="p-6 text-center bg-white border border-gray-200 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-gray-700">Content for "{tabName}"</h2>
        <p className="text-gray-500 mt-2">This is a placeholder for the content associated with this tab.</p>
    </div>
);