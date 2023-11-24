import React from "react";
import EarningCards from "../components/dashboard/EarningCards";
import LineChartt from "../components/dashboard/LineChart";
import BarChartt from "../components/dashboard/BarChart";
import CheckTable from "../components/dashboard/CheckTable";
import DailyTraffic from "../components/dashboard/DailyTraffic";
import PieChart from "../components/dashboard/PieChart";
import ComplexTable from "../components/dashboard/ComplexTable";
import Tasks from "../components/dashboard/Tasks";

const Dashboard = () => {
  return (
    <div className="container py-10">
      <EarningCards />
      <div className="py-6 flex gap-4 flex-wrap lg:flex-row flex-col">
        <LineChartt />
        <BarChartt />
      </div>
      <div className="pb-6 flex gap-4 flex-row flex-wrap break_point">
        <div className="flex-1">
          <CheckTable />
        </div>
        <div className="flex-1 flex gap-4 flex-wrap lg:flex-row flex-col">
          <DailyTraffic />
          <PieChart />
        </div>
      </div>
      <div className="pb-6 flex gap-4 flex-wrap lg:flex-row flex-col">
        <ComplexTable />
        <Tasks />
      </div>
    </div>
  );
};

export default Dashboard;
