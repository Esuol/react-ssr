const path = require("path");
const merge = require("webpack-merge");
const config = require('./webpack.base');

const clientConfig = {
  mode: "development",
  entry: "./src/client/index.ts",
  node: {
    fs: "empty"
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.css?$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[name]_[local]_[hash:base64:5]'
            }
          }
        ]
      },
      {
        test: /\.(png|jpeg|jpg|gif|svg)?$/,
        loader: 'url-loader',
        options: {
          limit: 8000,
          publicPath: '/'
        }
      }
    ]
  }
}

module.exports = merge(config, clientConfig);