import React from "react";

export default function ChartOptionCard({
  icon: Icon,
  title,
  subtitle,
  filled = false, 
}) {
  return (
    <div
      className={`flex items-center gap-3 rounded-md p-4 cursor-pointer transition
        ${filled
          ? "bg-blue-600 text-white hover:bg-blue-700"
          : "bg-[#fbfbfb] border border-[#0052cc] hover:bg-gray-50"
        }
      `}
    >
      <div
        className={`${filled ? "text-white" : "text-blue-600"} mt-1`}
      >
        <Icon size={40} strokeWidth={2} />
      </div>

      <div>
        <h3
          className={`font-semibold text-xl ${
            filled ? "text-white" : "text-black"
          }`}
        >
          {title}
        </h3>   

        <p
          className={`text-sm mt-0.5 ${
            filled ? "text-white" : "text-gray-800"
          }`}
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
}
