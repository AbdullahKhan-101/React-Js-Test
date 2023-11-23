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
      <div className="pb-6 flex gap-4 flex-wrap lg:flex-row flex-col">
        <CheckTable />
        <DailyTraffic />
      </div>
      <div className="pb-6 flex gap-4 flex-wrap lg:flex-row flex-col">
        <ComplexTable />
        <Tasks />
      </div>
    </div>
  );
};

export default Dashboard;
