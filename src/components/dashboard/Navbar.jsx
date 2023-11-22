import { Avatar, IconButton } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { useStateContext } from "../../context/StateContext";
import { themeSwitch } from "../../theme";

const Navbar = () => {
  const { menu, setMenu } = useStateContext();

  return (
    <div className="bg-light_bg dark:bg-dark_bg transition duration-500">
      <div className="container">
        <div className="flex py-4 item-center justify-between">
          <div className="flex items-center lg:gap-4 gap-2">
            <IconButton>
              <MenuIcon
                onClick={() => setMenu((prev) => !prev)}
                className=" !w-8 !h-8 cursor-pointer text-primary dark:text-white"
              />
            </IconButton>
            <h2 className="lg:text-4xl hidden lg:block text-3xl !leading-[35px] -translate-y-[2px] font-bold text-primary dark:text-white">
              Main Dashboard
            </h2>
          </div>
          <div></div>

          <div className="flex items-center rounded-full lg:gap-4 gap-2 lg:bg-white lg:dark:bg-dark_primary lg:p-3 p-1.5">
            <div className="bg-light_bg dark:bg-dark_bg rounded-2xl hidden lg:flex px-3 gap-2 items-center">
              <SearchIcon className="text-primary dark:text-white" />
              <input
                type="text"
                placeholder="Search"
                className="py-2 border-none dark:text-white outline-none bg-transparent"
              />
            </div>
            <div className="flex item-center lg:gap-4 gap-2 text-light_blue dark:text-white">
              <NotificationsNoneOutlinedIcon />
              <NightlightRoundIcon
                onClick={themeSwitch}
                className="-rotate-[20deg] cursor-pointer"
              />
              <InfoOutlinedIcon />
            </div>
            <Avatar
              className="border !w-11 !h-11"
              src="https://media.licdn.com/dms/image/C4D03AQF_ROXbwkqAfw/profile-displayphoto-shrink_200_200/0/1647017559647?e=1706140800&v=beta&t=LGteqkHnHvs0oYBqFvY9vgUwQQRH0-Sff8RG4FA31EQ"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
