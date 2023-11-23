import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
const countries = [{ name: "US" }, { name: "PK" }, { name: "CA" }];

const CountryDropdown = () => {
  const [selected, setSelected] = useState(countries[0]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative mt-1">
        <Listbox.Button className="relative flex items-center justify-between gap-2 w-full cursor-pointer rounded-lg bg-transparent py-2 px-2 text-left">
          <img
            src={`https://flagcdn.com/w80/${selected.name.toLowerCase()}.png`}
            className={` w-10 h-10 rounded-full`}
          />
          <div className="">
            <KeyboardArrowDownOutlinedIcon
              className="h-5 w-5 text-light_blue dark:text-white"
              aria-hidden="true"
            />
          </div>
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
                    <img
                      src={`https://flagcdn.com/w80/${person.name.toLowerCase()}.png`}
                      className={`block w-6 h-4`}
                    />
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
  );
};

export default CountryDropdown;
