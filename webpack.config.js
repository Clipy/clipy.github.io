const path = require('path');

module.exports = {
  cache: true,
  entry: path.resolve(__dirname, 'src', 'javascripts', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query:{
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css?modules'
      },
      {
        test: /\.png$/,
        loader: 'url?mimetype=image/png'
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', '.css']
  }
};
