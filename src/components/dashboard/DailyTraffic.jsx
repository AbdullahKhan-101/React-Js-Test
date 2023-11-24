import React from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { BarChart } from "@mui/x-charts/BarChart";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import { DEFAULT_X_AXIS_KEY } from "@mui/x-charts";

const seriesA = {
  data: [4.4, 5, 4, 7, 6, 5.5, 6],
  label: "Series A",
};

const DailyTraffic = () => {
  return (
    <div className="flex-1 rounded-2xl  dark:bg-dark_primary bg-white transition">
      <div className="flex justify-between p-6 gap-2 items-center">
        <div>
          <p className="text-light_blue text-sm font-medium mt-1">
            Daily Traffic
          </p>
          <h2 className="text-[26px] dark:text-white text-primary transition font-semibold ">
            2.579{" "}
            <span className="text-light_blue text-sm font-medium">
              Visitors
            </span>
          </h2>
        </div>
        <p className="text-light_blue text-sm font-medium mt-1">
          <span className="text-success font-bold">
            <ArrowDropUpIcon />
            +2.45%
          </span>
        </p>
      </div>
      <BarChart
        sx={{ width: "100%", padding: 0 }}
        // width={600}
        height={340}
        series={[{ ...seriesA, stack: "total" }]}
        xAxis={[
          {
            id: DEFAULT_X_AXIS_KEY,
            scaleType: "band",
            data: ["00", "04", "08", "12", "16", "20", "24"],
          },
        ]}
      />
    </div>
  );
};

export default DailyTraffic;
