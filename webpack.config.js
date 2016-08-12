const path = require('path');
const webpack = require('webpack');

module.exports = {
  cache: true,
  target: 'web',
  entry: [
    path.resolve(__dirname, 'src', 'javascripts', 'index.js'),
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'react-hot!babel',
      },
      {
        test: /\.css$/,
        loader: 'style!css?modules&importLoaders=1&localIdentName=[path]__[name]__[local]__[hash:base64:5]'
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
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // if you don't specify `--hot`
  ],
  devServer: {
    hot: true,
    port: 8080,
    cache: true,
    inline: true,
    colors: true,
    contentBase: '.'
  }
};
