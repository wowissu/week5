/* eslint-env node */
module.exports = {
  content: [
    // Example content paths...
    'index.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        cerulean: '#03AFF0',
        'cerulean-50': '#04AFF0',
        'purple-heart': '#9438CC',
        'catskill-white': '#E6EDF2'
      },
      boxShadow: {
        'FormInput': 'inset 0px 0.8px 8px rgb(0 0 0 / 35%)',
      },
      transitionProperty: {
        'border-color': 'border-color'
      }

    },
  },
  plugins: [],
}
