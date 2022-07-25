import React from "react";
import { IoSearch } from "react-icons/io5";

const SearchRegion = () => {
  return (
    <div className="flex-1 px-8 flex items-center justify-between text-zinc-400">
      <div className="relative hidden md:flex items-center">
        <input
          className="outline-none border pl-10 border-zinc-200 rounded-full px-4 py-1.5 placeholder:text-zinc-400 bg-zinc-50"
          placeholder="검색"
        />
        <div className="absolute left-4">
          <IoSearch size={16} />
        </div>
      </div>
    </div>
  );
};

export default SearchRegion;
