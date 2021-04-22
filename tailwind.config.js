module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Hind Siliguri", "sans-serif"],
      },
      colors: {
        primary: "#247CC0",
        secondary: "#C72535",
        dark: "#030D15",
      },
      height: {
        hero: "calc(100vh - 10rem)",
        categoryImages: "34.875rem",
        categoryContainer: "43.875rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
