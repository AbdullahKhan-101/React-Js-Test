/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#2B3674",
        dark_primary: "#111C44",
        purple: "#4318FF",
        dark_purple: "#7551FF",
        light_bg: "#F4F7FE",
        dark_bg: "#0B1437",
        dark_light_bg: "#1B254B",
        blue: "#707EAE",
        sky: "#39B8FF",
        light_blue: "#A3AED0",
        light_cyan: "#6AD2FF",
        success: "#01B574",
      },
    },
  },
  plugins: [],
};
