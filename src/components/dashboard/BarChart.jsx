import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const seriesA = {
  data: [2, 3, 1, 4, 5],
  label: "Series A",
};
const seriesB = {
  data: [3, 1, 4, 2, 1],
  label: "Series B",
};
const seriesC = {
  data: [3, 2, 4, 5, 1],
  label: "Series C",
};
const BarChartt = () => {
  return (
    <div className="flex-1 rounded-2xl p-6 dark:bg-dark_primary bg-white">
      <BarChart
        // width={600}
        height={300}
        series={[
          { ...seriesA, stack: "total" },
          { ...seriesB, stack: "total" },
          { ...seriesC, stack: "total" },
        ]}
      />
    </div>
  );
};

export default BarChartt;
