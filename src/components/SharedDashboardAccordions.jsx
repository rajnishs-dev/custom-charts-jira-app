import React, { useState } from "react";
import TabAccordion from "./TabAccordion";
import ToggleSwitch from "./ToggleSwitch";

const SharedDashboardAccordions = () => {
  const [menuBtn, setMenuBtn] = useState(true);
  const [exportBtn, setExportBtn] = useState(false);

  const accordionItems = [
    {
      title: "Shared Dashboard Settings",
      content: (
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <ToggleSwitch
              checked={menuBtn}
              onChange={() => setMenuBtn(!menuBtn)}
            />
            <span className="text-sm">Show options menu button</span>
          </div>

          <div className="flex items-center gap-2">
            <ToggleSwitch
              checked={exportBtn}
              onChange={() => setExportBtn(!exportBtn)}
            />
            <span className="text-sm">
              Allow direct export to PNG, PDF & CSV
            </span>
          </div>
        </div>
      ),
    },
  ];

  const linkPermission = [
    {
      title: "Anyone Public",
      content: (
        <div className="space-y-4">
          <div className="bg-yellow-500 text-white px-3 py-1 rounded-full inline-block text-sm">
            Coming Soon
          </div>
        </div>
      ),
    },

    {
      title: "Anyone (Public) With an Access Code",
      content: (
        <input
              type="text"
              placeholder="Insert Access Code"
              className="border border-gray-400 rounded-sm w-full p-1 px-2"
            />
      ),
    },

    {
      title: "JSM Portal – Access Restrictions",
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <select className="border border-gray-400 p-1 px-2 rounded-xs">
            <option>Select JSM Projects</option>
          </select>

          <select className="border border-gray-400 p-1 px-2 rounded-xs">
            <option>Select Organization</option>
          </select>

          <select className="border border-gray-400 p-1 px-2 rounded-xs sm:col-span-2">
            <option>Select Portal User</option>
          </select>
        </div>
      ),
    },
  ];

  return (
    <>
     <div className="pb-3 mb-3 border-b border-gray-400">
        <h5 className="font-semibold text-black mb-2">
          Dashboard Title
        </h5>
        <input
              type="text"
              placeholder="Default dashboard"
              className="border border-gray-400 rounded-sm w-full p-1 px-2"
            />
      </div>
      <TabAccordion items={accordionItems} />
      <div className="mb-2">
        <h5 className="font-semibold text-black mt-4">
          Link Access Permissions
        </h5>
        <span className="text-sm text-gray-500">
          Select who can view the link to this Shared Dashboard
        </span>
      </div>
      <TabAccordion items={linkPermission} />
    </>
  );
};

export default SharedDashboardAccordions;
