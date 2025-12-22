import React from "react";

export default function InfoCard({ icon: Icon, title, subtitle, items = [] }) {
  return (
    <div className="group bg-[#fbfbfb] border border-[#0052cc] rounded-md p-5 cursor-pointer transition hover:bg-[#0052cc] hover:border-[#0052cc]">
      <div className="flex items-start gap-2 mb-3">
        {Icon && (
          <div className="text-blue-500 mt-1 group-hover:text-white">
            <Icon size={18} strokeWidth={2} />
          </div>
        )}

        <div>
          <h3 className="text-xl font-semibold text-black group-hover:text-white">
            {title}
          </h3>
          {subtitle && (
            <p className="text-sm text-gray-800 mt-0.5 group-hover:text-white">{subtitle}</p>
          )}
        </div>
      </div>

      <ul className="space-y-1">
        {items.map((item, index) => (
          <li key={index} className="text-blue-600 text-sm list-disc ml-5 group-hover:text-white">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
