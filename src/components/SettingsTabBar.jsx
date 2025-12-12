import React from "react";

const SettingsTabBar = ({ activeTab, onTabChange, title, tabs }) => {
  return (
    <div>
      <div className="p-4">
        <div className="flex justify-between items-center border-b border-gray-300 pb-2">
          <h1 className="text-md font-semibold text-[#0052CC]">
            {title || "Default dashboard"}
          </h1>

          <div className="flex flex-wrap space-x-2 p-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <div key={tab.id} className="group relative">
                  <button
                    onClick={() => onTabChange(tab.id)}
                    className={`
                      p-1 rounded transition-colors duration-150 cursor-pointer flex items-center justify-center
                      ${
                        isActive
                          ? "bg-blue-600 text-white shadow-md"
                          : "hover:bg-gray-200 text-gray-600"
                      }`}
                    title={tab.tooltip}
                  >
                    <Icon className="h-5 w-5" />
                  </button>

                  <span
                    className={`absolute bottom-full mt-2 left-1/2 transform -translate-x-1/2
                      px-2 py-1 mb-2 text-white text-xs rounded-md whitespace-nowrap
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300
                      bg-gray-700`}
                  >
                    {tab.tooltip}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsTabBar;
