import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const PieChartt = () => {
  const palette = ["#6AD2FF", "#7551FF", "#39b8ff"];
  return (
    <div className="flex-1  rounded-2xl sm:p-6 p-4 relative dark:bg-dark_primary  bg-white transition">
      <div className="flex justify-between gap-2 items-center mb-6">
        <div>
          <p className="text-primary transition dark:text-white text-2xl font-semibold mt-1">
            Your Pie Chart
          </p>
        </div>
        <p className="text-light_blue text-sm font-medium mt-1">
          Monthly
          <span>
            <ArrowDropUpIcon className="rotate-180" />
          </span>
        </p>
      </div>
      <div className="max-w-fit max-h-fit mx-auto my-auto pl-20">
        <PieChart
          sx={{ margin: "0 auto" }}
          colors={palette}
          series={[
            {
              data: [
                { id: 0, value: 4, label: "Static" },
                { id: 1, value: 12, label: "Files" },
                { id: 2, value: 6, label: "Systems" },
              ],
            },
          ]}
          width={280}
          height={200}
        />
      </div>
      <div className="px-2 py-6 flex bg-[#1B254B] mt-6 items-center rounded-2xl w-full justify-center">
        <div className="border-r flex gap-2 border-r-primary px-10 ">
          <div className="w-[10px] h-[10px] rounded-full bg-dark_purple mt-[3px]"></div>
          <div>
            <p className="text-light_blue font-medium leading-3">Your files</p>
            <p className="text-primary transition dark:text-white mt-1 text-2xl font-semibold">
              63%
            </p>
          </div>
        </div>
        <div className=" flex gap-2 px-10">
          <div className="w-[10px] h-[10px] rounded-full bg-light_cyan mt-[3px]"></div>
          <div>
            <p className="text-light_blue font-medium leading-3">Your files</p>
            <p className="text-primary transition dark:text-white mt-1 text-2xl font-semibold">
              63%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieChartt;
