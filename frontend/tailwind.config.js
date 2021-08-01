const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: ["hover", "focus"],
      cursor: ["hover", "focus"],
    },

    colors: {
      transparent: "transparent",
      current: "currentColor",
      basic: {
        white: "#ffffff",
        gray: "#E5E5E5",
        yellow: "#FCA311",
        blue: "#14213D",
        black: "#231E1B",
        yellowLight : '#fada5e'
      },
      gradient: {
        blue: "#ffdd00",
        cream: "#fbb034",
      },
      project: {
        yellow: "#EFCB95",
      },

      language: {
        react: "#61DBFB",
        redux: "#764abc",
        node: "#3C873A",
        git: "#f34f29",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities, addComponents, e, prefix, config }) {
      const newUtilities = {
        ".horizontal-tb": {
          writingMode: "horizontal-tb",
        },
        ".vertical-rl": {
          writingMode: "vertical-rl",
        },
        ".vertical-lr": {
          writingMode: "vertical-lr",
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
