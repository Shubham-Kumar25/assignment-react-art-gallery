import React from "react";

function InputControl({ label, ...props }) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="font-semibold text-gray-700">{label}</label>}
      <input
        type="text"
        className="px-3 py-2 text-black border border-gray-300 rounded-md outline-none hover:border-gray-400 focus:border-[#4fa99f]"
        {...props}
      />
    </div>
  );
}

export default InputControl;
