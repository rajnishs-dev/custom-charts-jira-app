import React, { useState } from "react";
import SettingsTabBar from "./SettingsTabBar";
import { FaUserCog } from "react-icons/fa";

const DashboardSettings = ({ tabs, contents }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const getCurrentTitle = () => {
    const match = tabs.find((t) => t.id === activeTab);
    return match ? match.tooltip : "Default dashboard";
  };

  return (
    <>
      <div className="border border-gray-300 rounded-xs ">
        <SettingsTabBar
          activeTab={activeTab}
          onTabChange={setActiveTab}
          title={getCurrentTitle()}
          tabs={tabs}
        />

        <div className="mx-auto p-4">
          {contents[activeTab] || <div>No content available</div>}
        </div>

        <div className="px-4">
          <a
            href="/"
            className="
        flex items-center justify-end space-x-1.5 
        text-blue-600 hover:text-blue-800 
        font-medium border-t border-gray-400
        transition-colors duration-200 
        py-4
      "
          >
            <FaUserCog className="w-5 h-5" />

            <span>Admin Setting</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default DashboardSettings;
