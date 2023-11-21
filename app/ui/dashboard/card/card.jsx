import React from "react";
import { MdSupervisedUserCircle } from "react-icons/md";

function Card() {
  return (
    <div className="p-5 bg-[var(--bgSoft)] rounded-xl flex gap-5 cursor-pointer w-full shadow-lg hover:bg-[#2e374a]">
      <MdSupervisedUserCircle size={24} />
      <div className="flex flex-col gap-3">
        <span>Total Users</span>
        <span className="text-2xl font-medium">10.273</span>
        <span className="text-[12px] font-light">
          <span className="text-green-500">12%</span> more than previous week
        </span>
      </div>
    </div>
  );
}

export default Card;
