const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, './app'),
      filename: 'app.js',
      publicPath: '/',
      
    },
    module: {
      rules: [
        {
          test: /\.html$/i,
          loader: 'html-loader',
        },
        {
          test: /\.(sass|css|scss)$/i,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "postcss-loader",
            "sass-loader",
          ],
        },
        {
          test: /\.(ttf|woff|woff2|svg|eot)$/i,
          exclude: /images/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'assets/fonts',
              },
            },
          ],
        },
        {
          test: /\.(png|jpe?g|svg|gif)$/i,
          exclude: /fonts/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'assets/images',
              }
            },
          ],
        },
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ],
    },
      plugins: [
        new CleanWebpackPlugin({cleanStaleWebpackAssets: false}),
        new OptimizeCssAssetsPlugin({}),
        new MiniCssExtractPlugin({
          filename: "assets/css/style.css"
        }),
        new HtmlWebpackPlugin({
          filename: "index.html",
          template: "./src/index.html",
        }),
      ],
    devServer: {
      port: 9000,
      open:true,
      writeToDisk: true,
      stats: 'errors-only',

    },
  };