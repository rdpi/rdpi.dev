module.exports = {
  theme: {
    extend: {
      colors: {
        'cyber-yellow': '#fdfe01',
        'cyber-pink': '#ef5073',
        'cyber-lilac': '#8f5c7d',
        'cyber-purple': '#795a8d',
      }
    }
},
  variants: {},
  plugins: [
    require('tailwindcss-transitions')(),
    require('tailwindcss-transforms')({
      '3d': false, // defaults to false
    }),
  ]
}
