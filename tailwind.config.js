module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        'dark-purple': '#212240',
      },
      width: {
        '18': '4.5rem',
        '3/10': '15%',
        '1/5': '20%',
        '9/20': '45%',
      },
      height: {
        '18': '4.5rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
