module.exports = {
  rules: [
    {
      test: /\.(tsx?|jsx?)$/,
      // 默认会调用 @babel/core
      use: 'babel-loader'
    }
  ]
}