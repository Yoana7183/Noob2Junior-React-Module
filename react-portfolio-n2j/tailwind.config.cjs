/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['IBM+Plex+Sans', 'Amatic SC', 'Alata', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        titleEqualizer: ['IBM Plex Sans', 'sans-serif'],
        alata: ['Alata'],
        josefin: ['Josefin-Sans'],
      },
      colors: {
        buttonOfCalculatorAndRightSideBackground: '#00474B',
        hoverbuttonOfCalculatorAndRightSideBackground: '#26C2AE',
        buttonOnGitHubFindDevSearchButton: '#0079FF',
        hoverbuttonOnGitHubFindDevSearchButton: '#60ABFF',
        gitBlue: '#0079FF',
        hoverGitBlue: '#60ABFF',
        gitLightSpaceBackground: '#F6F8FF',
        gitDarkSpaceBackground: '#141D2F',
        gitContainerLightBackground: '#FEFEFE',
        gitContainerBlackBackground: '#1E2A47',
        gitTextOnLight: '#697C9A',
      },
    },
  },
  plugins: [],
};
