const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require('autoprefixer');

module.exports = {
  mode: 'production',
  entry: {
    main: './docs/index.jsx',
  },
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, './docs/dist'),
    filename: 'index.js',
    publicPath: '/dist/',
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: [
          'babel-loader?cacheDirectory',
          'eslint-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.css',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
  ],
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
    modules: ['node_modules'],
    alias: {
      're-flex': path.resolve(__dirname, 'src'),
    }
  },
  optimization: {
    minimize: true,
  },
};
