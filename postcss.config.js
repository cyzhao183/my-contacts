module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 37.5,
      unitPrecision: 5,
      propList: ['*'],
      propBlackList: [
        'border',
        'border-top',
        'border-left',
        'border-right',
        'border-bottom',
        'border-radius',
      ],
      selectorBlackList: [],
      replace: true,
      mediaQuery: false,
      minPixelValue: 2,
    },
  },
};
