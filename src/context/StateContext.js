import React, { createContext, useContext, useState, useEffect } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [menu, setMenu] = useState(true);

  const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  };

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
      document.documentElement.classList.add(currentTheme);
    }
  }, []);

  return (
    <Context.Provider
      value={{
        menu,
        setMenu,
        themeSwitch,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
