"use client";
import { useState } from "react";

interface Campaign {
  id: number;
  title: string;
  startDate: string;
  endDate: string;
  status: "Active" | "Upcoming" | "Completed";
}

const campaigns: Campaign[] = [
  {
    id: 1,
    title: "Campaign 1",
    startDate: "2024-11-01",
    endDate: "2024-11-10",
    status: "Completed",
  },
  {
    id: 2,
    title: "Campaign 2",
    startDate: "2024-11-05",
    endDate: "2024-11-15",
    status: "Active",
  },
  {
    id: 3,
    title: "Campaign 3",
    startDate: "2024-12-01",
    endDate: "2024-12-10",
    status: "Upcoming",
  },
  {
    id: 4,
    title: "Campaign 4",
    startDate: "2024-12-15",
    endDate: "2024-12-30",
    status: "Upcoming",
  },
  {
    id: 5,
    title: "Campaign 5",
    startDate: "2025-02-01",
    endDate: "2025-03-30",
    status: "Upcoming",
  },
  // Add more campaigns as needed
];

export default function CampaignListing() {
  const [statusFilter, setStatusFilter] = useState<
    "All" | "Active" | "Upcoming" | "Completed"
  >("All");
  const [startDateFilter, setStartDateFilter] = useState<string>("");
  const [endDateFilter, setEndDateFilter] = useState<string>("");

  const filteredCampaigns = campaigns.filter((campaign) => {
    const campaignStartDate = new Date(campaign.startDate);
    const campaignEndDate = new Date(campaign.endDate);
    const startDateMatch = startDateFilter
      ? campaignStartDate >= new Date(startDateFilter)
      : true;
    const endDateMatch = endDateFilter
      ? campaignEndDate <= new Date(endDateFilter)
      : true;
    const statusMatch =
      statusFilter === "All" ? true : campaign.status === statusFilter;
    return startDateMatch && endDateMatch && statusMatch;
  });

  return (
    <section className="bg-white p-6 rounded-lg shadow-md mt-8">
      <h2 className="text-xl font-bold mb-4">Campaign Listing</h2>

      {/* Filter Section */}
      <div className="mb-4 flex flex-col md:flex-row text-sm gap-6 items-start md:items-center">
        <div className="w-full md:w-auto">
          <label className="font-semibold block mb-1">Filter by Status:</label>
          <select
            className="border p-2 text-sm rounded w-full md:w-auto"
            value={statusFilter}
            onChange={(e) =>
              setStatusFilter(
                e.target.value as "All" | "Active" | "Upcoming" | "Completed"
              )
            }
          >
            <option value="All">All</option>
            <option value="Active">Active</option>
            <option value="Upcoming">Upcoming</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <div className="w-full md:w-auto">
          <label className="font-semibold text-sm block mb-1">
            Start Date:
          </label>
          <input
            type="date"
            className="border p-2 text-sm rounded w-full"
            value={startDateFilter}
            onChange={(e) => setStartDateFilter(e.target.value)}
          />
        </div>

        <div className="w-full md:w-auto">
          <label className="font-semibold text-sm block mb-1">End Date:</label>
          <input
            type="date"
            className="border p-2 text-sm rounded w-full"
            value={endDateFilter}
            onChange={(e) => setEndDateFilter(e.target.value)}
          />
        </div>
      </div>

      {/* Campaign Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead>
            <tr>
              <th className="border p-2">Title</th>
              <th className="border p-2">Start Date</th>
              <th className="border p-2">End Date</th>
              <th className="border p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredCampaigns.length > 0 ? (
              filteredCampaigns.map((campaign) => (
                <tr key={campaign.id} className="hover:bg-gray-100">
                  <td className="border p-2">{campaign.title}</td>
                  <td className="border p-2">{campaign.startDate}</td>
                  <td className="border p-2">{campaign.endDate}</td>
                  <td className="border p-2">
                    <span
                      className={`${
                        campaign.status === "Active"
                          ? "text-green-600"
                          : campaign.status === "Upcoming"
                          ? "text-yellow-600"
                          : "text-gray-500"
                      } font-semibold`}
                    >
                      {campaign.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={4}
                  className="border p-4 text-center text-gray-500"
                >
                  No campaigns found for the selected filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
