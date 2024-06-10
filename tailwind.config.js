/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],

  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        inter: ["inter"],
        Circular: ["Circular STD"],
      },
      colors: {
        ungu: "#5D50c6",
        pink: "#F85E9F",
        orange: "#FF5722",
        grey: "#222831",
      },
      dropShadow: {
        "sm-shadow": [
          "0px 548px 219px rgba(0, 0, 0, 0.01)",
          "0px 306px 185px rgba(0, 0, 0, 0.04)",
          "0px 137px 137px rgba(0, 0, 0, 0.06)",
          "0px 34px 75px rgba(0, 0, 0, 0.07)",
          "0px 0px 0px rgba(0, 0, 0, 0.07)",
        ],
        "lg-shadow": [
          "0px 81px 32px rgba(0, 0, 0, 0.01)",
          "0px 45px 27px rgba(0, 0, 0, 0.05)",
          "0px 20px 20px rgba(0, 0, 0, 0.09)",
          "0px 5px 11px rgba(0, 0, 0, 0.01)",
          "0px 0px 0px rgba(0, 0, 0, 0.01)",
        ],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
