const webpack = require('webpack');
const path = require('path');
const config = require('./webpack.config');

config.entry = './src';
config.output = {
  path: path.join(__dirname, './dist'),
  filename: 'index.js',
  library: 'Re-Flex',
  libraryTarget: 'commonjs2',
};
config.externals = {
  react: 'react',
};
config.target = 'node';
config.plugins = [
  new webpack.optimize.UglifyJsPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
  }),
];

module.exports = config;
