import React from "react";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";

const EarningCards = () => {
  return (
    <div className="flex items-center flex-wrap justify-center gap-4">
      <Card icon={<BarChartOutlinedIcon />} price="350.4" desc="Earnings" />
      <Card
        icon={<AttachMoneyOutlinedIcon />}
        price="641.38"
        desc="Spend this month"
      />
      <Card price="574.34" desc="Sales" />
      <Card price="1,000" desc="Your balance" />
      <Card icon={<BarChartOutlinedIcon />} price="350.4" desc="Earnings" />
      <Card
        icon={<AttachMoneyOutlinedIcon />}
        price="641.38"
        desc="Spend this month"
      />
    </div>
  );
};

export default EarningCards;

const Card = ({ icon, price, desc }) => {
  return (
    <div className="bg-white flex-1 flex max-w-[330px] min-w-[220px] w-full items-center gap-4 dark:bg-dark_primary py-4 px-6 rounded-2xl">
      {icon && (
        <div className="dark:bg-dark_light_bg text-purple dark:text-dark_purple bg-light_bg p-2 rounded-full w-12 flex items-center justify-center h-12">
          {icon}
        </div>
      )}
      <div>
        <p className="text-light_blue text-sm">{desc}</p>
        <p className="xl:text-[28px] text-xl font-semibold tracking-tight leading-9 text-primary dark:text-white">
          ${price}
        </p>
      </div>
    </div>
  );
};
