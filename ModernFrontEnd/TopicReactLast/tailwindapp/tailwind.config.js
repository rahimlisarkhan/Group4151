/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bermuda-100": "#78dcca",
        "bermuda-200": "#78dccd",
      },
      spacing: {
        "5pxIzzet": "5px",
      },
    },
  },
  plugins: [],
};
