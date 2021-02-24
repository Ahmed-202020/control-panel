const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');

module.exports = {
    entry:{
      'app': './src/index.js',
      'assets/js/banner': './src/assets/js/banner.js',
      'assets/js/tabs': './src/assets/js/tabs.js',
      'assets/js/upload' : './src/assets/js/upload.js',
      'assets/js/chart' : './src/assets/js/chart.js',
    },
    output: {
      path: path.resolve(__dirname, './app'),
      filename: '[name].js',
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
          chunks:['app'],
        }),
        new HtmlWebpackPlugin({
          filename: "button.html",
          template: "./src/components/button.html",
          chunks:['app'],
        }),
        new HtmlWebpackPlugin({
          filename: "textfield.html",
          template: "./src/components/textfield.html",
          chunks:['app'],
        }),
        new HtmlWebpackPlugin({
          filename: "card.html",
          template: "./src/components/card.html",
          chunks:['app'],
        }),
        new HtmlWebpackPlugin({
          filename: "banner.html",
          template: "./src/components/banner.html",
          chunks:['app' , 'assets/js/banner'],
        }),
        new HtmlWebpackPlugin({
          filename: "list.html",
          template: "./src/components/list.html",
          chunks:['app'],
        }),
        new HtmlWebpackPlugin({
          filename: "tabs.html",
          template: "./src/components/tabs.html",
          chunks:['app' , 'assets/js/tabs'],
        }),
        new HtmlWebpackPlugin({
          filename: "upload.html",
          template: "./src/components/upload.html",
          chunks:['app' , 'assets/js/upload'],
        }),
        new HtmlWebpackPlugin({
          filename: "chart.html",
          template: "./src/components/chart.html",
          chunks:['app' , 'assets/js/chart'],
        }),
        new HtmlWebpackPlugin({
          filename: "help.html",
          template: "./src/components/help.html",
          chunks:['app'],
        }),
        new HtmlWebpackPlugin({
          filename: "summary.html",
          template: "./src/components/summary.html",
          chunks:['app'],
        }),
        new HtmlWebpackPlugin({
          filename: "actions.html",
          template: "./src/components/actions.html",
          chunks:['app'],
        }),
        new HtmlWebpackPlugin({
          filename: "sidebar.html",
          template: "./src/components/sidebar.html",
          chunks:['app'],
        }),
        new HtmlWebpackPlugin({
          filename: "table.html",
          template: "./src/components/table.html",
          chunks:['app'],
        }),
      ],
    devServer: {
      port: 9000,
      open:true,
      writeToDisk: true,
      stats: 'errors-only',

    },
  };