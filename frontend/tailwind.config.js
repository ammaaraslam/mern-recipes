/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#3b82f6",
      dark: "#0F172A",
      light: "#F8FAFC",
      mid: "#CBD5E1",
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      lato: ["Lato", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
