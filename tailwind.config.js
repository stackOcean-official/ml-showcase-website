/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        224: "56rem",
        256: "64rem",
      },
      colors: {
        ocean: {
          100: "#D6F2F5",
          200: "#B8E7ED",
          300: "#67e8f9",
          400: "#80CBD2",
          500: "#4DBAC5",
          600: "#4DBAC5",
          700: "#1194A2",
          800: "#1194A2",
          900: "#1194A2",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
