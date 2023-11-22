import React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { Hidden } from "@mui/material";

const LineChartt = () => {
  return (
    <div className="flex-1 rounded-2xl p-6 dark:bg-dark_primary bg-white transition">
      <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5],
          },
        ]}
        // width={800}
        height={300}
      />
    </div>
  );
};

export default LineChartt;
