import React from "react";
import Sidebar from "../ui/dashboard/sidebar/sidebar";
import Navbar from "../ui/dashboard/navbar/navbar";

function DashboardLayout({ children }) {
  return (
    <div>
      {/* Sidebar */}
      <div>
        <Sidebar />
      </div>
      {/* Navbar and children ie users, products wrapper */}
      <div>
        <Navbar />
        {children}
      </div>
    </div>
  );
}

export default DashboardLayout;
