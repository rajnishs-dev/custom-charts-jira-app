import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BsShare, BsQuestionCircle } from "react-icons/bs";
import { BiGridVertical } from "react-icons/bi";
import { GoPencil, GoClock } from "react-icons/go";
import { IoReorderThree } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

const PlusIcon = () => <span className="mr-1 text-lg font-bold">+</span>;

const DUMMY_CHART_OPTIONS = [
  { id: "", name: "Select Chart Gadget...", disabled: true },
  { id: "sales_over_time", name: "Sales Over Time (Line Chart)" },
  { id: "user_growth", name: "User Growth (Last 30 Days)" },
  { id: "top_products", name: "Top 5 Products by Revenue (Bar Chart)" },
  { id: "support_tickets", name: "Open Support Tickets (Gauge)" },
  { id: "project_status", name: "Project Status Summary" },
];

const initialGadgets = [
  { id: 1, selectedChart: "" },
  { id: 2, selectedChart: "" },
  { id: 3, selectedChart: "" },
  { id: 4, selectedChart: "" },
  { id: 5, selectedChart: "" },
];

const SelectGadget = ({ selectedChart, chartOptions, onSelect, gadgetId }) => {
  const handleChange = (event) => {
    onSelect(gadgetId, event.target.value);
  };

  return (
    <div className="relative flex-grow">
      <BiGridVertical
        size={16}
        className="text-gray-500 pointer-events-none absolute inset-y-0 left-[7px] my-auto"
      />
      <select
        value={selectedChart}
        onChange={handleChange}
        className={`
          appearance-none w-full px-3 py-2 pl-8 text-sm rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500
          ${
            selectedChart === "" ? "text-gray-500" : "text-gray-900 font-medium"
          }
          bg-white hover:bg-gray-50
        `}
      >
        {chartOptions.map((option) => (
          <option
            key={option.id}
            value={option.id}
            disabled={option.disabled || false}
          >
            {option.name}
          </option>
        ))}
      </select>

      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
        <svg
          className="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

const Gadget = ({ gadget, chartOptions, onSelect, onDelete }) => {
  return (
    <div className="flex items-center space-x-2 border-b border-gray-100 pb-2 mb-2">
      <SelectGadget
        selectedChart={gadget.selectedChart}
        chartOptions={chartOptions}
        onSelect={onSelect}
        gadgetId={gadget.id}
      />

      <button
        onClick={() => onDelete(gadget.id)}
        className="p-2 rounded hover:bg-red-50 text-gray-400 hover:text-red-600 transition-colors"
        title="Delete Gadget"
      >
        <AiOutlineDelete className="h-5 w-5 cursor-pointer" />
      </button>
    </div>
  );
};

const DashboardConfig = () => {
  const [gadgets, setGadgets] = useState(initialGadgets);
  const [customSearch, setCustomSearch] = useState("");

  const handleSelectChart = (gadgetId, chartId) => {
    setGadgets((prevGadgets) =>
      prevGadgets.map((g) =>
        g.id === gadgetId ? { ...g, selectedChart: chartId } : g
      )
    );
  };

  const handleDeleteGadget = (gadgetId) => {
    setGadgets((prevGadgets) => prevGadgets.filter((g) => g.id !== gadgetId));
  };

  const handleAddGadget = () => {
    const nextId =
      gadgets.length > 0 ? Math.max(...gadgets.map((g) => g.id)) + 1 : 1;
    setGadgets((prevGadgets) => [
      ...prevGadgets,
      { id: nextId, selectedChart: "" },
    ]);
  };

  const customChartsCount = 3;
  const foundChartsCount = 4;

  return (
    <div className="border border-gray-300 rounded-xs p-4 my-4">
      <div className="flex justify-between items-center pb-4">
        <h1 className="text-xl font-semibold text-gray-900">
          Default dashboard
        </h1>
        <div className="flex space-x-2 rounded-md p-1">
          <button className="bg-blue-600 text-white p-[6px] rounded-lg shadow-md">
            <FaExternalLinkAlt className="w-4 h-4" />
          </button>
          <button
            className="p-1 rounded bg-gray-200 hover:bg-blue-600 text-gray-600 hover:text-white"
            title="History"
          >
            <GoClock className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="bg-white p-4 rounded">
        {gadgets
          .filter((gadget) => gadget && typeof gadget === "object")
          .map((gadget) => (
            <Gadget
              key={gadget.id}
              gadget={gadget}
              chartOptions={DUMMY_CHART_OPTIONS}
              onSelect={handleSelectChart}
              onDelete={handleDeleteGadget}
            />
          ))}

        {/* <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-sm text-gray-700 mb-2">
            <span className="font-semibold">Custom Charts:</span> {foundChartsCount} Found | <span className="text-blue-600">{customChartsCount} Custom Gadgets</span>
          </p>
          
          <div className="relative mb-2">
            <input
              type="text"
              value={customSearch}
              onChange={(e) => setCustomSearch(e.target.value)}
              placeholder="Find Custom Charts..."
              className="w-full border border-gray-300 py-2 pl-3 pr-10 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm"
            />
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
          
          <div className="text-gray-500 text-sm italic py-2">
            No Custom Charts gadget found
          </div>
        </div> */}

        <div className="text-center mt-6">
          <button
            onClick={handleAddGadget}
            className="flex items-center justify-center mx-auto px-4 py-1 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#0052CC] hover:bg-blue-800 cursor-pointer transition duration-150 ease-in-out"
          >
            <PlusIcon /> Add Gadgets
          </button>
        </div>
      </div>

      <div className="flex justify-between items-center mt-4 pt-4 text-sm text-gray-500">
        <div className="flex items-center space-x-1">
          <BsShare className="h-4 w-4" />
          <span>Shared as: </span>
          <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
            Project Dashboard
          </a>
        </div>
        <BsQuestionCircle className="h-5 w-5 hover:text-gray-700 cursor-pointer" />
      </div>
    </div>
  );
};

export default DashboardConfig;
