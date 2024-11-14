import React from "react";
import CampaignChart from "@/components/Chart";
import StatisticsTable from "@/components/StatisticsTable";
import ChartComponent from "@/components/Charts/ChartComponents";

const Statistics = () => {
  return (
    <div>
      <StatisticsTable />
      <ChartComponent />
      <CampaignChart />
    </div>
  );
};

export default Statistics;
