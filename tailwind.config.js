/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        tertiary: "var(--color-tertiary)",
        text: "var(--color-grey)",
      },
      maxWidth: {
        container: "var(--width-container)",
      },
      minWidth: {
        button: "var(--width-button)",
      },
      height: {
        nav: "var(--height-nav)",
        button: "var(--height-button)",
      },
      maxHeight: {
        todo: "var(--height-todo-list)",
      },
    },
  },
  plugins: [],
};
