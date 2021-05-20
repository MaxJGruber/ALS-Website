module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "pale-cornflower-blue": "#A6CDE5",
        "light-pastel-purple": "#B49EDE",
        "pastel-yellow": "#FCFC94",
        "dark-pastel-blue": "#759ECD",
        "conditioner-yellow": "#FAFFCB",
        "vodka-purple": "#C6B4E9",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
