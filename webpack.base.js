const path = require("path");

module.exports = {
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src/'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(tsx?|jsx?)$/,
        // 默认会调用 @babel/core
        use: 'babel-loader'
      }
    ]
  }
}