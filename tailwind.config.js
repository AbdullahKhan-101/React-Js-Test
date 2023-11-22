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
        light_bg: "#F4F7FE",
        dark_bg: "#0B1437",
        blue: "#707EAE",
        light_blue: "#A3AED0",
      },
    },
  },
  plugins: [],
};
