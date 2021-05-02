const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var"],
      },
      colors: {
        indigo: colors.blue,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
