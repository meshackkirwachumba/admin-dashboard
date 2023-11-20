import React from "react";
import Sidebar from "../ui/dashboard/sidebar/sidebar";
import Navbar from "../ui/dashboard/navbar/navbar";

function DashboardLayout({ children }) {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="flex-[1] bg-[var(--bgSoft)] p-[20px]">
        <Sidebar />
      </div>
      {/* Navbar and children ie users, products wrapper */}
      <div className="flex-[4] p-[20px]">
        <Navbar />
        {children}
      </div>
    </div>
  );
}

export default DashboardLayout;
