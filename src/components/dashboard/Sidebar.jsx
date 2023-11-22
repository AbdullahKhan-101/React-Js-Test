import { IconButton } from "@mui/material";
import React, { useEffect } from "react";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import WindowOutlinedIcon from "@mui/icons-material/WindowOutlined";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import { useStateContext } from "../../context/StateContext";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

const Sidebar = () => {
  const { menu, setMenu } = useStateContext();

  const sidebarLinks = [
    {
      icon: <HomeIcon />,
      name: "Dashboard",
    },
    {
      icon: <ShoppingCartOutlinedIcon />,
      name: "NFT Marketplace",
    },
    {
      icon: <BarChartOutlinedIcon />,
      name: "Tables",
    },
    {
      icon: <WindowOutlinedIcon />,
      name: "Kanban",
    },
    {
      icon: <PersonIcon />,
      name: "Profile",
    },
    {
      icon: <LockIcon />,
      name: "Sign In",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1280) {
        setMenu(false);
      } else {
        setMenu(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`transition  bg-white dark:bg-dark_primary z-[11] fixed top-0 left-0 h-screen ${
        menu ? "w-[300px]  translate-x-[0px] " : " -translate-x-[300px]"
      }`}
    >
      <div className="border-b relative border-b-light_bg dark:border-b-light_bg/10 py-10 px-16 ">
        <h2 className="lg:text-4xl text-3xl font-bold text-primary dark:text-white tracking-tight">
          Visric
        </h2>
        <div
          onClick={() => setMenu(false)}
          className="absolute dark:text-white block w-7 h-7 xl:hidden top-6 right-4 cursor-pointer  text-primary"
        >
          <CancelOutlinedIcon />
        </div>
      </div>
      <div className=" pt-10 flex flex-col gap-4">
        {sidebarLinks.map(({ icon, name }, index) => (
          <div
            key={index}
            className={`flex gap-4 items-center cursor-pointer py-1.5 ${
              index === 0
                ? "border-r-4  border-r-purple dark:border-r-dark_purple"
                : ""
            } pl-10`}
          >
            <div
              className={`w-6 h-6 ${
                index === 0
                  ? "text-purple dark:text-white"
                  : "text-light_blue dark:text-white"
              } `}
            >
              {icon}
            </div>
            <p
              className={`font-semibold text-lg ${
                index === 0
                  ? "text-primary dark:text-white"
                  : "text-light_blue dark:text-white"
              } `}
            >
              {name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
