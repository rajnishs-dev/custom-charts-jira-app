export default function ChartPopupWrapper({ children, onClose }) {
  return (
    <div onClick={onClose} className="fixed inset-0 bg-black/50 z-50">
      <div
        className="max-h-[75vh] min-h-[200px] rounded-lg bg-white mt-[90px] m-7 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
