import React, { Fragment, useState } from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import { Listbox, Transition } from "@headlessui/react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

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
              <Listbox.Button className="relative flex items-center justify-between gap-2 w-full cursor-pointer rounded-lg bg-transparent py-2 px-2 text-left">
                {/* <img
            alt="country-img"
            src={`https://flagcdn.com/w80/${selected.name.toLowerCase()}.png`}
            className={` w-10 h-10 rounded-full`}
          /> */}
                <CalendarTodayOutlinedIcon />
                <span>{selected.name}</span>{" "}
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-light_bg dark:bg-dark_light_bg py-1 px-2 text-base">
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
      <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10, 11, 12] }]}
        series={[
          {
            data: [2, 4, 1.8, 4.5, 2.2, 5, 4, 4.2],
          },
        ]}
        // width={800}
        height={300}
      />
    </div>
  );
};

export default LineChartt;
