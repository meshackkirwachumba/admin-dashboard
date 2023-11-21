"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    visit: 4000,
    click: 2400,
    amt: 2400,
  },
  {
    name: "Tue",
    visit: 3000,
    click: 1398,
    amt: 2210,
  },
  {
    name: "Wed",
    visit: 2000,
    click: 9800,
    amt: 2290,
  },
  {
    name: "Thu",
    visit: 2780,
    click: 3908,
    amt: 2000,
  },
  {
    name: "Fri",
    visit: 1890,
    click: 4800,
    amt: 2181,
  },
  {
    name: "Sat",
    visit: 2390,
    click: 3800,
    amt: 2500,
  },
];

function Chart() {
  return (
    <div className="h-[450px] bg-[var(--bgSoft)] rounded-xl p-5 shadow-lg ">
      <h2 className="font-light text-[var(--textSoft)] mb-4">Weekly Recap</h2>
      <ResponsiveContainer width="100%" height="80%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip
            contentStyle={{ backgroundColor: "#2e374a", border: "none" }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="visit"
            stroke="#8884d8"
            strokeDasharray="5 5"
          />
          <Line
            type="monotone"
            dataKey="click"
            stroke="#82ca9d"
            strokeDasharray="3 4 5 2"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
