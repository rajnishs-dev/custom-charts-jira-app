import React from "react";

export default function ChartOptionCard({
  icon: Icon,
  title,
  subtitle,
}) {
  return (
    <div
      className={`
        group
        flex items-center gap-3 rounded-md p-4 cursor-pointer transition
        bg-[#fbfbfb] border border-[#0052cc]
        hover:bg-[#0052cc] hover:border-[#0052cc]
      `}
    >
      {/* Icon */}
      <div className={`text-blue-600 group-hover:text-white mt-1`}>
        <Icon size={40} strokeWidth={2} />
      </div>

      {/* Text */}
      <div>
        <h3 className="font-semibold text-xl text-black group-hover:text-white">
          {title}
        </h3>

        <p className="text-sm mt-0.5 text-gray-800 group-hover:text-white">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
