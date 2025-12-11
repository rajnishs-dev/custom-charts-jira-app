import React from 'react';
import { BsGear, BsFileText, BsDownload, BsQuestionCircle, BsCalendarEvent } from 'react-icons/bs';
import { FaLaptopCode } from 'react-icons/fa';
import { MdOutlineDateRange } from 'react-icons/md'; 

const tabs = [

  { id: 'settings', icon: BsGear, tooltip: 'Setting' },

  { id: 'monitor', icon: FaLaptopCode, tooltip: 'Monitor View' }, 

    { id: 'descriptions', icon: BsFileText, tooltip: 'Descriptions' }, 

  { id: 'import_export', icon: BsDownload, tooltip: 'Import/Export' },

  { id: 'help', icon: BsQuestionCircle, tooltip: 'Help' },
];

const SettingsTabBar = ({ activeTab, onTabChange, title }) => {
  return (
    <div className="border-b border-gray-300 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Dashboard Title / Active Tab Name */}
        <h1 className="text-xl font-semibold text-gray-800">
          {title || 'Default dashboard'}
        </h1>

        {/* Tab Icons */}
        <div className="flex space-x-1 border border-gray-300 rounded-md p-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            
            return (
              <div 
                key={tab.id} 
                className="group relative"
              >
                <button
                  onClick={() => onTabChange(tab.id)}
                  className={`
                    p-1 rounded transition-colors duration-150 flex items-center justify-center
                    ${isActive 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'hover:bg-gray-200 text-gray-600'
                    }
                  `}
                  title={tab.tooltip} // Title for basic tooltip
                >
                  <Icon className="h-5 w-5" />
                </button>
                
                {/* Custom Tooltip */}
                <span className={`
                  absolute bottom-full mt-2 left-1/2 transform -translate-x-1/2
                  px-2 py-1 mb-2 bg-gray-700 text-white text-xs rounded-md whitespace-nowrap
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300
                  ${isActive ? 'bg-blue-600' : 'bg-gray-700'} 
                `}>
                  {tab.tooltip}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SettingsTabBar;