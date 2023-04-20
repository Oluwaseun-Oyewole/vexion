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
      backgroundImage: {
        "spiral-bg": "url('/img/image.png')",
        "frame-1": "url('./src/assets/img/Image (1).png')",
        "frame-2": "url('./src/assets/img/Frame (8).png')",
        spiral: "url('./src/assets/img/image (2).png')",
        "internet-img": "url('./src/assets/img/Vector (1).png')",
      },
    },
  },
  plugins: [],
};
