import CampaignChart from "@/components/Chart";
import StatisticsTable from "@/components/StatisticsTable";

interface Campaign {
  title: string;
  status: "Active" | "Completed" | "Upcoming";
}

const campaigns: Campaign[] = [
  { title: "Campaign 1", status: "Active" },
  { title: "Campaign 2", status: "Completed" },
  { title: "Campaign 3", status: "Upcoming" },
];
export default function Home() {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Campaign Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {campaigns.map((campaign, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg text-center ${
              campaign.status === "Active"
                ? "bg-green-200"
                : campaign.status === "Completed"
                ? "bg-gray-300"
                : "bg-yellow-200"
            }`}
          >
            <h3 className="text-lg font-semibold">{campaign.title}</h3>
            <p className="text-sm">{campaign.status}</p>
          </div>
        ))}
      </div>
      <StatisticsTable />
      <CampaignChart />
    </section>
  );
}
