import React, { useState } from "react";
import SettingsTabBar from "./SettingsTabBar";

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

      </div>
    </>
  );
};

export default DashboardSettings;
