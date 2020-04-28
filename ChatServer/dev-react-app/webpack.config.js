const DashboardPlugin = require('webpack-dashboard/plugin');
const path = require('path');

const PATH = {
  SRC: path.join(__dirname, 'src'),
  PUBLIC: path.join(__dirname, 'public')
};

module.exports = {
  entry: __dirname + "/src/index.tsx", // webpack entry point. Module to start building dependency graph
  output: {
    path: __dirname + '/dist', // Folder to store generated bundle
    filename: 'bundle.js',  // Name of generated bundle after build
    publicPath: '/' // public URL of the output directory when referenced in a browser
  },
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
  ]
}