import React from "react";
import Card from "../ui/dashboard/card/card";
import Rightbar from "../ui/dashboard/rightbar/rightbar";
import Transactions from "../ui/dashboard/transactions/transactions";
import Chart from "../ui/dashboard/chart/chart";

function Dashboard() {
  return (
    <div className="flex gap-5 mt-5">
      {/* main */}
      <div className="flex-[3] flex flex-col gap-5">
        {/* cards wrapper */}
        <div className="flex items-center justify-between gap-5">
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>

      {/* rightbar */}
      <div className="flex-[1]">
        <Rightbar />
      </div>
    </div>
  );
}

export default Dashboard;
