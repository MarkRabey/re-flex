const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const config = require('./webpack.config');

config.entry = './src/Flex.jsx';
config.output = {
  path: path.join(__dirname, './dist'),
  filename: 'Flex.js',
  library: 'Flex',
  libraryTarget: 'commonjs2',
};
config.externals = {
  react: 'react',
};
config.target = 'node';
config.plugins = [
  new ExtractTextPlugin('Flex.css', { allChunks: true }),
];

module.exports = config;
