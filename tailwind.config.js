module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "logo-blue": "#e7f3ff",
        "african-violet": "#6C63FF",
        "yogurt-orange": "#FAAC6A",
        "blue-green": "#8DD4CD",
        "tertiary-pink": "#e45858",
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
