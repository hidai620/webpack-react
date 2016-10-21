// webpack.config.js
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, 'public/scripts'),
    publicPath: "/scripts/",
    filename: 'app.bundle.js'
  },

  devServer: {
    inline: true,
    hot: true,
    contentBase: path.join(__dirname, 'public/')
  },

  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
