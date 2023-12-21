/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
      "10xl": "172px",
    },
    extend: {
      colors: {
        mainRed: "#E6533C",
        mainPurple: "#7A29DC",
        mainDark: "#323443",
        mainGray: "#4F5261",
        mainGray500: "#232532",
        mainGray800: "#303030",
        mainBlack: "#171717",
        mainWhite: "#FAFAF9",
      },
    },
  },
  plugins: [],
};
