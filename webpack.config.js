const HtmlWebpackPlugin = require('html-webpack-plugin'); // for generate an HTML5 file
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // to extract CSS into separate files
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); // to minify your JavaScript
const webpack = require('webpack');

module.exports = () => ({
  entry: {
    wfesample: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].min.js',
    libraryTarget: 'umd',
  },
  mode: 'production',

  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new MiniCssExtractPlugin(),
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en/),
  ],
});
