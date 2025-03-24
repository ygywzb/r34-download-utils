const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'r34-download-utils.js',
    library: 'r34DownloadUtils',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        // use: {
        //   loader: 'babel-loader',
        // },
      },
    ],
  },
};
