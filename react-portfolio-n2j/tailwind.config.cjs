/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Josefin Sans', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        titleEqualizer: ['"IBM Plex Sans"', 'sans-serif'],
        alata: ['Alata'],
        josefin: ['Josefin-Sans'],
        kumbhSans: ['Kumbh Sans'],
        dictionary: ['Playfair Display'],
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
        ecommerceOrangeColor: '#FF7E1B',
        hoverEcommerceOrangeColor: '#FFAB6A',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
};
