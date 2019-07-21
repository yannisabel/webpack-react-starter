// webpack-common-config.js

// This file will contain configuration data that
// is shared between development and production builds.

const HtmlWebpackPlugin = require("html-webpack-plugin");
const paths = require("./paths");

module.exports = {
  entry: {
    vendor: ['react', 'react-dom', 'react-router-dom'],
    main: paths.appIndexJs
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: paths.appHtml
    })
  ],
  resolve: {
    extensions: [".js", ".jsx"],
    modules: ["node_modules"],
    // Aliases help with shortening relative paths
    alias: {
      Components: paths.appComponents
    }
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader'
        }]
      }
    ]
  }
};
