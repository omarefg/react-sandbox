const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PORT = 4040;

module.exports = {
  entry: resolve(__dirname, 'index.js'),
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    publicPath: '/',
  },
  devServer: {
    port: PORT,
    hot: true,
    historyApiFallback: true,
    publicPath: '/',
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
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'public/index.html'),
    }),
  ],
};
