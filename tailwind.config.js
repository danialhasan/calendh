module.exports = {
  mode: "jit",
  purge: ["./pages/**/.*", "./components/**/.*"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
