const { ComponentsContentPath } = require("@yext/search-ui-react");
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./node_modules/@yext/search-ui-react/**/*.{js,ts,jsx,tsx}", // New
  ],
  theme: {
    colors: {
      'transparent': 'transparent',
      'white': '#ffffff',
      'black': '#000000',
      'purple-primary': '#3A356D',
      'pink-primary': '#F089B1',
      'gray-dark': '#E6E6E6',
      'gray-light': '#F5F5F5',
      'golden': '#C2A636',
      'green-dark': '#002A2F',
      'blue-grad': '#5a7799'

    },
    extend: {
      backgroundImage: {
        'bodypattern': "url('images/arrow-down-shallow-white.svg')",
        'hour-pattern': "url('images/location-img.jpg')",
        'hero-banner': "url('images/hero-banner.jpg')",
        'finder-bg': "url('images/locaor-bg.svg')",

        }
    },
  },
  plugins: [],
};