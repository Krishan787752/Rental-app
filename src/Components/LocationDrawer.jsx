import { useEffect, useMemo, useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function LocationDrawer({ open, onClose, value, onChange }) {
  const [pin, setPin] = useState(value || "560068");

  useEffect(() => {
    setPin(value || "");
  }, [value]);

  const disabled = useMemo(() => !/^\d{6}$/.test(pin), [pin]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40" onClick={onClose} />

      {/* Drawer Panel */}
      <div className="absolute left-0 top-0 h-full w-full max-w-[480px] bg-white shadow-xl transform transition-transform duration-300 translate-x-0">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b sticky top-0 bg-white z-10">
          <h2 className="text-lg font-semibold">Select Delivery Location</h2>
          <button aria-label="Close" onClick={onClose} className="p-2 rounded-full hover:bg-gray-100">
            <FaTimes className="text-xl" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 space-y-5 overflow-y-auto h-[calc(100%-60px)]">
          {/* Input */}
          <div>
            <label className="block text-sm text-gray-600 mb-2">Enter your pincode</label>
            <div className="flex items-center gap-2">
              <input
                inputMode="numeric"
                maxLength={6}
                value={pin}
                onChange={(e) => setPin(e.target.value.replace(/[^0-9]/g, "").slice(0, 6))}
                placeholder="Enter your pincode"
                className="flex-1 border border-gray-300 rounded-full px-4 py-2.5 outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button
                disabled={disabled}
                onClick={() => onChange(pin)}
                className={`px-4 py-2.5 rounded-full font-medium ${disabled ? "bg-gray-200 text-gray-500" : "bg-teal-500 text-white hover:bg-teal-600"}`}
              >
                Apply
              </button>
            </div>
          </div>

          {/* Current selection */}
          <div className="text-sm text-gray-700">
            <span className="text-gray-600">Currently selected pincode :</span>
            <span className="ml-2 font-semibold">{value || "-"}</span>
          </div>

          {/* Skeleton grid (placeholder for locations) */}
          <div className="grid grid-cols-3 gap-3 mt-2">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="rounded-xl h-20 bg-gray-100 shadow-inner animate-pulse" />)
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
