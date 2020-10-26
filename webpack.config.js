const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PORT = 4040;

module.exports = {
  entry: resolve(__dirname, 'index.js'),
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    publicPath: `http://localhost:${PORT}/`,
    chunkFilename: 'js/[id].[chunkhash].js',
  },
  devServer: {
    port: PORT,
    publicPath: '/',
    hot: true,
    contentBase: resolve(__dirname, 'dist'),
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.jpg|png|gif|woff|woff2|eot|ttf|svg|mp4|webm$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'assets/',
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'public/index.html'),
    }),
  ],
};
