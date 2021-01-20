const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.vue"],
  theme: {
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
    },
  },
  variants: {},
  plugins: [],
};
