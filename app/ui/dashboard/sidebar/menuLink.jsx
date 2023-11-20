"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function MenuLink({ item }) {
  const pathname = usePathname();
  return (
    <Link
      href={item.path}
      className={`p-5 flex items-center gap-2.5 my-[5px] rounded-lg hover:bg-[#2e374a] ${
        pathname === item.path ? "bg-[#2e374a]" : ""
      }`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
}

export default MenuLink;
