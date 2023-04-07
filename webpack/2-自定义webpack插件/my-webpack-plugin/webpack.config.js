const path = require('path');
const MyWebpackPlugin = require('./MyWebpackPlugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new MyWebpackPlugin()
  ]
};