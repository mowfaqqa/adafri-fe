"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const chartData = [
  { name: "Jan", clicks: 30 },
  { name: "Feb", clicks: 45 },
  { name: "Mar", clicks: 60 },
  { name: "Apr", clicks: 50 },
  { name: "May", clicks: 20 },
  { name: "Jun", clicks: 80 },
  { name: "Jul", clicks: 100 },
  { name: "Aug", clicks: 30 },
  { name: "Sep", clicks: 50 },
  { name: "Oct", clicks: 35 },
  { name: "Nov", clicks: 57 },
  { name: "Dec", clicks: 76 },
];

export default function CampaignChart() {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-xl font-bold mb-4">Total Clicks Per Month</h2>
      <div className="overflow-x-auto">
        <div className="min-w-[600px]">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="clicks"
                stroke="#8884d8"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}
