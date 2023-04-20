/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000",
        body: "#7F7F90",
        linear: "#E6DDFE",
      },
      fontFamily: {
        Archivo: ["Archivo", "sans-serif"],
        satoshi: ["Satoshi", "sans-serif"],
        Quicksand: ["Quicksand", "sans-serif"],
      },
    },
  },
  plugins: [],
};
