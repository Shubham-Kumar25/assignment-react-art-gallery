import React from "react";
import { BsSearch, BsFilterLeft } from "react-icons/bs";

const SearchBox = () => {
  return (
    <div className="flex items-center h-20 px-8 bg-white rounded-lg w-[640px]">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-3">
          <div className="text-gray-500">
            <BsSearch size={20} />
          </div>
          <input
            type="text"
            placeholder="Search here..."
            className="w-full h-full bg-transparent outline-none"
          />
        </div>
        <div className="flex items-center gap-2 cursor-pointer hover:text-gray-900">
          <BsFilterLeft size={30} />
          <span className="text-base font-medium text-black">Filters</span>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
