/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      lato: ["Lato", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
