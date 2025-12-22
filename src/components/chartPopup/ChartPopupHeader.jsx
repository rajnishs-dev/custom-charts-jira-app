import React from "react";

export default function ChartPopupHeader({ icon: Icon, title, subtitle }) {
  return (
    <div className="flex items-start gap-2 mb-4">
      {Icon && (
        <div className="text-blue-600">
          <Icon size={30} />
        </div>
      )}
      <div>
        <h2 className="text-2xl font-semibold text-black">{title}</h2>
        {subtitle && (
          <p className="text-sm text-gray-800 mt-1">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
