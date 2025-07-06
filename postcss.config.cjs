module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 16,
      propList: ['font-size', 'padding','line-height', 'margin'],
      replace: true,
    },
  },
};