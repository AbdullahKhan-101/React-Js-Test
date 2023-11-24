import React, { Fragment, useState } from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import { Listbox, Transition } from "@headlessui/react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import CheckSharpIcon from "@mui/icons-material/CheckSharp";

const countries = [
  { name: "This month" },
  { name: "This week" },
  { name: "Daily" },
];

const LineChartt = () => {
  const [selected, setSelected] = useState(countries[0]);
  return (
    <div className="flex-1 rounded-2xl p-6 dark:bg-dark_primary bg-white transition dark:text-white text-primary">
      <div className="flex justify-between gap-2 items-center">
        <div className="z-10">
          <Listbox value={selected} onChange={setSelected}>
            <div className="relative mt-1">
              <Listbox.Button className="relative min-w-[130px] flex items-center gap-3 w-full cursor-pointer rounded-lg bg-transparent py-2 px-2 text-left">
                <CalendarTodayOutlinedIcon />
                <span>{selected.name}</span>{" "}
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute min-w-[130px] mt-1 max-h-60 w-full overflow-auto rounded-md bg-light_bg dark:bg-dark_light_bg py-1 px-2 text-base">
                  {countries.map((person, personIdx) => (
                    <Listbox.Option
                      key={personIdx}
                      className={({ active }) =>
                        `relative cursor-pointer select-none py-2 px-2 ${
                          active ? "bg-light_blue-100" : ""
                        }`
                      }
                      value={person}
                    >
                      {({ selected }) => (
                        <div className="flex items-center gap-2">
                          <span className={`block ${selected && "font-bold"}`}>
                            {person.name}
                          </span>
                        </div>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
        <div className="dark:bg-dark_light_bg transition rounded-xl flex items-center justify-center w-10 h-10 bg-light_bg text-primary dark:text-white">
          <BarChartOutlinedIcon />
        </div>
      </div>
      <div className="flex xl:flex-row flex-col mt-5">
        <div className="md:min-w-[150px] min-w-[140px] ">
          <h2 className="xl:text-4xl lg:text-3xl dark:text-white text-primary transition font-bold ">
            $37.5k
          </h2>
          <p className="text-light_blue text-sm font-medium mt-1">
            Total Spent
            <span className="text-success font-bold">
              <ArrowDropUpIcon />
              +2.45%
            </span>
          </p>
          <div className="mt-4 hidden xl:flex gap-2 items-center">
            <div className="bg-success flex items-center justify-center rounded-full !w-6 !h-6  ">
              <CheckSharpIcon className="!w-[18px] !h-[18px] text-white" />
            </div>
            <p className="text-success font-semibold text-lg">On Track</p>
          </div>
        </div>
        <LineChart
          // xAxis={[{ data: [1, 2.4, 4.2, 6, 8, 10] }]}
          series={[
            {
              data: [2, 4, 2.8, 4.5, 3.2, 4],
            },
          ]}
          xAxis={[
            {
              // id: DEFAULT_X_AXIS_KEY,
              scaleType: "point",
              data: ["SEP", "OCT", "NOV", "DEC", "JAN", "FEB"],
            },
          ]}
          // width={800}
          height={300}
        />
      </div>
    </div>
  );
};

export default LineChartt;
