/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        body:['Roboto:ital']
      },
    },
    divideWidth: {
      DEFAULT: "1px",
      "0": "0",
      "2": "2px",
      "3": "3px",
      "4": "4px",
      "6": "6px",
      "8": "8px",
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar": {
          "-ms-overflow-style": "none", // Hide scrollbar in IE & Edge
          "scrollbar-width": "none", // Hide scrollbar in Firefox
        },
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none", // Hide scrollbar in Chrome, Safari & Opera
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
