import React from "react";

function Pagination() {
  return (
    <div className="p-3 flex justify-between">
      <button className="py-1.5 px-3 disabled:cursor-not-allowed bg-gray-300 text-xs text-gray-500">
        Previous
      </button>
      <button className="py-1.5 px-3 disabled:cursor-not-allowed bg-gray-300 text-xs text-gray-500">
        Next
      </button>
    </div>
  );
}

export default Pagination;
