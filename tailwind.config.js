/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'media-screen-1060': '1060px',
        'media-screen-990': '990px',
        'media-screen-750': '750px',
      },
      colors: {
        'primary-color': '#688297',
        'information-bg': '#F5F5F5',
        'add-to-cart': 'rgb(104, 130, 151)',
      },
      maxWidth: {
        1450: '90.625rem',
      },
      width: {
        100: '6.25rem',
      },
      spacing: {
        'header-height': '62px',
      },
    },
  },
  plugins: [],
};
