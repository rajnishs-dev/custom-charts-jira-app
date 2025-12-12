import React, { useState } from "react";
import TabAccordion from "./TabAccordion";
import ToggleSwitch from "./ToggleSwitch";

export const DescriptionsTabContent = () => {

  const [menuBtn, setMenuBtn] = useState(true);
   const [exportBtn, setExportBtn] = useState(true);

  const descriptionOption = [
    {
      title: "Description Option",
      content: (
        <>
        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-3">
            <ToggleSwitch
              checked={menuBtn}
              onChange={() => setMenuBtn(!menuBtn)}
            />
            <span className="text-sm">Show options menu button</span>
          </div>
                <select className="border border-gray-400 p-1 px-2 rounded-xs w-full">
            <option>Select JSM Projects</option>
          </select>
        </div>
        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-3">
            <ToggleSwitch
              checked={exportBtn}
              onChange={() => setExportBtn(!exportBtn)}
            />
            <span className="text-sm">Show options menu button</span>
          </div>
                <select className="border border-gray-400 p-1 px-2 rounded-xs w-full">
            <option>Select JSM Projects</option>
          </select>
        </div>
        <div className="flex gap-2 items-center">
        <span className="text-sm">Maximum height of description</span>
         <input
          type="text"
          placeholder="100"
          className="border border-gray-400 rounded-sm w-full p-1 px-2 max-w-[150px]"
        />
        <span className="text-sm">Pixel</span>
        </div>
        </>
      ),
    },
  ];

  return (
    <div className="">
      <div className="h-48 border border-gray-300 p-2 rounded mb-4">
        <p className="text-gray-500">
          Add a description... (Rich Text Editor would be here)
        </p>
      </div>

      <TabAccordion items={descriptionOption} />
    </div>
  );
};
