import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import { DEFAULT_X_AXIS_KEY } from "@mui/x-charts";

const seriesA = {
  data: [4.4, 5, 4, 7, 6, 5.5, 6, 7],
  label: "Series A",
};
const seriesB = {
  data: [2, 3, 4, 3, 4, 4, 2.5, 4],
  label: "Series B",
};
const seriesC = {
  data: [2, 2, 3, 3.5, 1, 2, 2, 2],
  label: "Series C",
};
const BarChartt = () => {
  return (
    <div className="flex-1 rounded-2xl p-6 dark:bg-dark_primary bg-white transition">
      <div className="flex justify-between gap-2 items-center mb-4">
        <h2 className="text-[26px] dark:text-white text-primary transition font-semibold ">
          Weekly Revenue
        </h2>
        <div className="dark:bg-dark_light_bg transition rounded-xl flex items-center justify-center w-10 h-10 bg-light_bg text-primary dark:text-white">
          <BarChartOutlinedIcon />
        </div>
      </div>

      <BarChart
        // width={600}
        height={300}
        series={[
          { ...seriesA, stack: "total" },
          { ...seriesB, stack: "total" },
          { ...seriesC, stack: "total" },
        ]}
        // series={[{ data: [6, 18, 12, 10, 11, 12, 13, 13] }]}
        xAxis={[
          {
            id: DEFAULT_X_AXIS_KEY,
            scaleType: "band",
            data: ["17", "18", "19", "20", "21", "22", "23", "24"],
          },
        ]}
      />
    </div>
  );
};

export default BarChartt;
