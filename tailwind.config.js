/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    function({addUtilities}){
      const newUtilities ={
        "no-scrollbar::-webkit-scrollbar":{
          dsiplay:"none",
        },
        ".no-scollbar":{
          "-ms-overflow-style":"none",
          "scrollbae-width":"none",
        },
      };
      // addUtilities{newUtilities};
    },
  ],
  theme: {
    divideWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    }
  }
}