const path = require("path");
const { merge } = require("webpack-merge");
const nodeExternals = require('webpack-node-externals');
const config = require('./webpack.base');

const serverConfig = {
  target: "node",
  mode: "development",
  entry: "./src/server/index.ts",
  output: {
    filename: 'bundle.js',
		path: path.resolve(__dirname, 'build')
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.css?$/,
        use: [
          "isomorphic-style-loader", {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
            }
          }
        ]
      },
      {
        test: /\.(png|jpeg|jpg|gif|svg)?$/,
        loader: 'url-loader',
        options: {
          limit: 8000,
          outputPath: '../public/',
          publicPath: '/'
        }
      }
    ]
  }
}

module.exports = merge(config, serverConfig);