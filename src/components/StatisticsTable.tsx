"use client";
import React from "react";

const campaignData = [
  { id: 1, impressions: 1000, clicks: 150, conversions: 20 },
  { id: 2, impressions: 2000, clicks: 250, conversions: 30 },
];

export default function StatisticsTable() {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-xl font-bold mb-4">Statistics Table</h2>
      
      {/* Table Wrapper for Responsive Scroll */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[500px] text-left border-collapse">
          <thead>
            <tr>
              <th className="border p-2">ID</th>
              <th className="border p-2">Impressions</th>
              <th className="border p-2">Clicks</th>
              <th className="border p-2">Conversions</th>
            </tr>
          </thead>
          <tbody>
            {campaignData.map((data) => (
              <tr key={data.id} className="hover:bg-gray-100">
                <td className="border p-2">{data.id}</td>
                <td className="border p-2">{data.impressions}</td>
                <td className="border p-2">{data.clicks}</td>
                <td className="border p-2">{data.conversions}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}