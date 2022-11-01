/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize: {
      xs: 13,
      sm: 14,
      md: 15,
      lg: 16,
      xl: 19,
      '2xl': 20
    },
    colors:{
      'black': '#0F1419',

      'transparent': transparent,

      dark: {
            1:'#17202A',
            2:'#1C2733',
            3:'#283340',
            4:'#3A444C',
            5:'#5B7083',
            6:'#8899A6',
            7:'#EBEEF0',
            8:'#F7F9FA',
      },
      
      'primary-blue': '#1DA1F2',
      'white': '#FFFFFF'
    },
    extend: {
      fontFamily:{
        sans: 'Poppins, sans-serif'
      },
    },
  },
  plugins: [],
}
