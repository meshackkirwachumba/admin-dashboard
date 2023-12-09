import React from "react";
import { MdSearch } from "react-icons/md";

function SearchInput({ placeholder }) {
  return (
    <div className="flex items-center shadow-xl gap-4 p-4 rounded-lg max-w-[500px]">
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        className="outline-none border-none text-[var(--textSoft)] bg-transparent placeholder:text-xs"
      />
    </div>
  );
}

export default SearchInput;
