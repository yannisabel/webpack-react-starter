// webpack-prod-config.js
// contains configuration data related to prod build
const webpack = require("webpack");
const merge = require("webpack-merge");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const globImporter = require('node-sass-glob-importer');

const paths = require("./paths");
const common = require("./webpack-common-config.js");

module.exports = merge(common, {
  devtool: '',
  mode: "production",
  output: {
    filename: "js/[name]_[chunkhash].js",
    path: paths.appBuild
  },
  plugins: [
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new FixStyleOnlyEntriesPlugin(),
    new MiniCssExtractPlugin({
      filename: './css/[name]_[chunkhash].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: paths.appSrc,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/react"]
          }
        }
      },
      {
        test: /\.(css|scss)$/,
        include: [paths.appSrc],
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: "[local]_[[hash:base64:5]",
              discardDuplicates: true,
              sourceMap: false,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: paths.appBase + '/postcss.config.js',
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              importer: globImporter(),
            }
          }
        ],
      },
    ]
  }
});
