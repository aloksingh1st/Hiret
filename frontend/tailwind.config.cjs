/** @type {import('tailwindcss').Config} */

module.exports = {
    // content: ['./src/**/*.{js,jsx}'],
    content: [
      // ...
      'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
    theme: {
      extend: {
        colors: {
          "brand": "#2B4F71",
          "brand-amber": "#FF8656",
          "brand-red": "#FF5656",
          "brand-gray": "#7E7E7E",
        },
        screens: {
          xs: '480px',
        },
        fontFamily: {
          inter: ['Inter var', 'sans-serif'],
        },
        boxShadow: {
          card: '0 0 1px 0 rgba(189,192,207,0.06),0 10px 16px -1px rgba(189,192,207,0.2)',
          cardhover: '0 0 1px 0 rgba(189,192,207,0.06),0 10px 16px -1px rgba(189,192,207,0.4)',
        },
      },
    },
    plugins: [
      require('flowbite/plugin')
  ]
  };