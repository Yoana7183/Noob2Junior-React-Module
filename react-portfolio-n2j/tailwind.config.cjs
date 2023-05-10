/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['IBM+Plex+Sans', 'Amatic SC', 'Alata', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        titleEqualizer: ['IBM Plex Sans', 'sans-serif'],
        alata: ['Alata'],
        josefin: [
          'Alata',
          'Josefin-Sans',
          'Amatic SC',
          'cursive',
          'IBM Plex Sans',
          'sans-serif',
        ],
      },
      colors: {
        buttonOfCalculatorAndRightSideBackground: '#00474B',
        hoverbuttonOfCalculatorAndRightSideBackground: '#26C2AE',
      },
    },
  },
  plugins: [],
};
