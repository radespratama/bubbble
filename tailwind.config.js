/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/layouts/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Outfit", ...defaultTheme.fontFamily.sans],
    },
    screens: {
      xs: "640px",
      sm: "768px",
      md: "900px",
      lg: "1024px",
      xl: "1100px",
    },
    colors: ({ colors }) => ({
      transparent: colors.transparent,
      white: colors.white,
      gray: { ...colors.gray, 100: "#F2F2F2", 950: "#111111" },
      sky: { ...colors.sky, 900: "#523ee8", 700: "#8070ff" },
      emerald: colors.emerald,
      red: colors.red,
    }),
  },
  plugins: [],
};
