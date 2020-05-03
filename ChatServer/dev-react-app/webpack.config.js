const DashboardPlugin = require('webpack-dashboard/plugin');
const path = require('path');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');



const PATH = {
  SRC: path.join(__dirname, 'src'),
  PUBLIC: path.join(__dirname, 'src', 'public'),
  DIST: path.join(__dirname, 'dist'),
};

module.exports = {
  mode: process.env.NODE_ENV,
  entry: __dirname + "/src/index.tsx", // webpack entry point. Module to start building dependency graph
  output: {
    path: __dirname + '/dist', // Folder to store generated bundle
    filename: 'bundle.js',  // Name of generated bundle after build
    publicPath: '/' // public URL of the output directory when referenced in a browser
  },
  watch: true,
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      public: path.resolve(PATH.PUBLIC),
      src: path.resolve(PATH.SRC)
    }
  },
  module: {  // where we defined file patterns and their loaders
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: [
          /node_modules/
        ]
      },
      {
        test: /\.(gif|png|jpg|jpeg|svg)?$/,
        loader: 'file-loader',
        options: {
          name: './public/[name].[ext]',
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
    ]
  },
  plugins: [  // Array of plugins to apply to build chunk
    new DashboardPlugin(),
    //new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: PATH.PUBLIC,
        to: path.join(PATH.DIST, 'public'),
      }
    ]),
  ]
}