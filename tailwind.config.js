/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        1: "8px",
        2: "12px",
        3: "16px",
        4: "24px",
        5: "32px",
        6: "48px",
        10: "50px",
        90: "90px",
      },
      width: {
        558: "558px",
        88: "88px",
      },
    },
  },
  plugins: [],
};
