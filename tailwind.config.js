/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    screens: {
      sm: "400px",
      md: "768px",
      xl: "1280px",

      smOnly: { max: "767.98px" },
      mdOnly: { min: "768px", max: "1279.98px" },
    },

    container: {
      center: true,
      padding: {
        DEFAULT: "34px",
        sm: "34px",
        md: "42px",
        xl: "34px",
      },
    },

    extend: {},
  },
  plugins: [],
};
