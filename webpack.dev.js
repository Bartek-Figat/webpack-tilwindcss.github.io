const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: './dist',
    compress: true,
    port: 8080,
    watchContentBase: true,
    hot: true,
    open: 'Chrome',
    overlay: {
      warnings: true,
      errors: true,
    }
  },
});
