/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
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
  },
  plugins: [],
};
