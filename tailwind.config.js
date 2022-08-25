module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scale: {
        flip: "-1",
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
