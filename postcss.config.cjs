module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 16,
      propList: ['font-size', 'padding', 'margin'],
      replace: true,
    },
  },
};