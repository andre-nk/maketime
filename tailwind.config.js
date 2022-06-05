// tailwind.config.js
const { colors: defaultColors } = require("tailwindcss/defaultTheme");

const colors = {
  ...defaultColors,
  ...{
    primary: "#F7E11B",
    secondary: "#90E6F0",
    major: "#030303",
    minor: "#81817F",
    marble: "#F8F6F0",
  },
};

module.exports = {
  content: ["./dist/**/*.html", "./src/**/*.{js,jsx,ts,tsx}", "./*.html"],
  plugins: [require("@tailwindcss/forms")],
  variants: {
    extend: {
      opacity: ["disabled"],
    },
  },
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#F7E11B",
          800: "#BA9F26",
        },
        secondary: {
          100: "#F5FBFD",
          200: "#DFFBFD",
          300: "#ADDAF0",
          500: "#90E6F0",
          800: "#2DAADC",
        },
        "custom-black": "#030303",
        "custom-gray": {
          300: "#81817F",
          500: "#E8E9E7",
        },
        "custom-white": "#F8F6F0",
        "custom-red": "#EB5757",
      },
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
};
