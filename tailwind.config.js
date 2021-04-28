module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#FFD2C1",
        secondary: "#C72535",
        dark: "#030D15",
      },
      height: {
        hero: "calc(100vh - 10rem)",
        categoryImages: "34.875rem",
        categoryContainer: "43.875rem",
        104: "28rem",
      },
      width: {
        "11/50": "22%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
