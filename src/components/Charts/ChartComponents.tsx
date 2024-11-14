"use client";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

// Dummy data for impressions and conversions
const data = [
  { name: "Campaign 1", impressions: 2400, conversions: 400 },
  { name: "Campaign 2", impressions: 1398, conversions: 300 },
  { name: "Campaign 3", impressions: 9800, conversions: 800 },
  { name: "Campaign 4", impressions: 3908, conversions: 200 },
  { name: "Campaign 5", impressions: 4800, conversions: 500 },
];

const pieData = [
  { name: "Impressions", value: 20000 },
  { name: "Conversions", value: 2200 },
];

// Colors for Pie chart
const COLORS = ["#8884d8", "#82ca9d"];

export default function ChartComponent() {
  return (
    <section className="p-6 bg-white rounded-lg shadow-md mt-6">
      <h2 className="text-xl font-bold mb-4">Campaign Performance</h2>

      {/* Scrollable Bar Chart */}
      <div className="mb-8">
        <h3 className="font-semibold text-lg mb-2">
          Impressions & Conversions by Campaign
        </h3>
        <div className="overflow-x-auto">
          <div className="min-w-[600px]">
            <ResponsiveContainer width="100%" height={400}>
              <BarChart
                data={data}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="impressions" fill="#8884d8" />
                <Bar dataKey="conversions" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Responsive Pie Chart */}
      <div className="flex justify-center">
        <div className="w-64 h-64 md:w-96 md:h-96">
          <h3 className="font-semibold text-lg mb-2 text-center">
            Impressions vs Conversions
          </h3>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius="30%"
                outerRadius="60%"
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}
