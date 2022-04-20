const path = require('path');

module.exports = {
  entry: {
    app: './src/main.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  devServer: {
    static: {
      directory: __dirname,
    },
    compress: true,
  },
};