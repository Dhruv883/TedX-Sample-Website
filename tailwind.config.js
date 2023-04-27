/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#e62b1e",
      },
      boxShadow: {
        shadow: "0 0 3px rgba(0,0,0,.2)",
      },
      screens: {
        mobile: "325px",
      },
    },
  },
  plugins: [],
};
