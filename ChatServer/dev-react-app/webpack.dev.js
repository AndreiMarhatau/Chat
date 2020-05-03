const merge = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.config');

const PATH = {
  SRC: path.join(__dirname, '/src')
};

module.exports = merge(common, {
  devtool: 'source-map',
  devServer: {
    compress: true,
    hot: true,
    https: true,
    open: true,
    port: process.env.PORT || 3000,
    overlay: {
      warnings: true,
      errors: true
    },
    stats: {
      colors: true
    },
    historyApiFallback: true
  },
  plugins: [

    new HtmlWebpackPlugin(
      {
        inject: true,
        template: `${PATH.SRC}/index.html`,
      },
      process.env.NODE_ENV === 'production'
        ? {
          minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
          },
        }
        : undefined
    ),
  ]
});
