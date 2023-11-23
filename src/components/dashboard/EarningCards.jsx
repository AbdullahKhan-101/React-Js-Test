import React from "react";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import AddTaskIcon from "@mui/icons-material/AddTask";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import CountryDropdown from "../general/CountryDropdown";

const EarningCards = () => {
  return (
    <div className="flex  flex-wrap justify-center gap-4">
      {/* Best option here is map but due to shartage of time I'm just passing the props */}
      <Card icon={<BarChartOutlinedIcon />} price="$350.4" desc="Earnings" />
      <Card
        icon={<AttachMoneyOutlinedIcon />}
        price="$641.38"
        desc="Spend this month"
      />
      <Card
        price="$574.34"
        desc="Sales"
        subPara="since last month"
        ratio="+23%"
      />
      <Card price="$1,000" desc="Your balance" countryDropdown={true} />
      <Card icon={<AddTaskIcon />} total="154" desc="New Tasks" />
      <Card icon={<FileCopyIcon />} total="2935" desc="Total Projects" />
    </div>
  );
};

export default EarningCards;

const Card = ({
  icon,
  price,
  desc,
  subPara,
  ratio,
  total,
  countryDropdown,
}) => {
  return (
    <div className="bg-white transition flex-1 flex max-w-[330px] min-w-[220px] w-full items-center gap-4 dark:bg-dark_primary py-4 px-6 rounded-2xl">
      {icon && (
        <div
          className={` ${
            desc === "New Tasks"
              ? "text-white bg-gradient-to-r from-indigo-500 to-sky-500"
              : "dark:bg-dark_light_bg bg-light_bg text-purple dark:text-white"
          }  transition   p-2 rounded-full w-12 flex items-center justify-center h-12`}
        >
          {icon}
        </div>
      )}
      <div
        className={`flex-1 ${countryDropdown && "flex gap-2 justify-between "}`}
      >
        <div className="flex-1">
          <p className="text-light_blue text-sm font-medium">{desc}</p>
          <p className="xl:text-[28px] transition text-xl font-semibold tracking-tight leading-9 text-primary dark:text-white">
            {price}
          </p>
          <p className="xl:text-[24px] transition text-xl font-semibold tracking-tight leading-9 text-primary dark:text-white">
            {total}
          </p>
          <p className="text-light_blue text-sm">
            <span className="text-success">{ratio}</span> {subPara}
          </p>
        </div>
        {countryDropdown && (
          <div className="max-w-[90px] z-10 flex-1">
            <CountryDropdown />
          </div>
        )}
      </div>
    </div>
  );
};
