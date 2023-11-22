import React from "react";
import EarningCards from "../components/dashboard/EarningCards";
import LineChart from "../components/dashboard/LineChart";
import BarChart from "../components/dashboard/BarChart";

const Dashboard = () => {
  return (
    <div className="bg-light_bg dark:bg-dark_bg transition dark:text-white">
      <div className="container py-10">
        <EarningCards />
        <div className="py-6 flex gap-4 flex-wrap">
          <LineChart />
          <BarChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
