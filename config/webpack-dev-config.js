// webpack-dev-config.js

// configuration data related to development only
const webpack = require('webpack');
const merge = require('webpack-merge');
const globImporter = require('node-sass-glob-importer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");

const paths = require('./paths');
const common = require('./webpack-common-config.js');

const Port = 3000;

module.exports = merge(common, {
  mode: 'development',
  performance: {
    hints: 'warning'
  },
  output: {
    filename: "js/[name]_[hash].js",
    path: paths.appBuild
  },
  devServer: {
    port: Port,
    contentBase: paths.appSrc,
  },
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new FixStyleOnlyEntriesPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name]_[hash].css',
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: paths.appSrc,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/react']
          }
        }
      },
      {
        test: /\.(css|scss)$/,
        include: paths.appSrc,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: "[local]_[[hash:base64:5]",
              discardDuplicates: true,
              importLoaders: 1,
              sourceMap: true
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: paths.appBase + '/postcss.config.js',
              }
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              importer: globImporter()
            },
          },
        ],
      },
    ]
  }
});
