import React from "react";
import EarningCards from "../components/dashboard/EarningCards";

const Dashboard = () => {
  return (
    <div className="bg-light_bg dark:bg-dark_bg transition dark:text-white">
      <div className="container py-10">
        <EarningCards />
      </div>
    </div>
  );
};

export default Dashboard;
