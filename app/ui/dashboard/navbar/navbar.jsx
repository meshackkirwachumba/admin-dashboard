"use client";

import { usePathname } from "next/navigation";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

function Navbar() {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-between p-5 rounded-xl bg-[var(--bgSoft)]">
      <div className="capitalize font-medium text-[var(--textSoft)]">
        {pathname.split("/").pop()}
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2.5 bg-[#2e374a] rounded-lg p-2">
          <MdSearch />
          <input
            type="text"
            placeholder="Search..."
            className="outline-none border-none text-[var(--textSoft)] bg-transparent placeholder:text-xs"
          />
        </div>
        <div className="flex items-center gap-5">
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
