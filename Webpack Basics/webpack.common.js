const path = require('path')

module.exports = {
  context: path.resolve('js'),
  entry: ['./utils', './app'],
  output: {
    path: path.resolve('dist/js'),
    publicPath: '/public/dist/js/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: [/node_modules/],
        use: ['babel-loader']
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: [/node_modules/],
        loader: 'eslint-loader',
        options: {
          cache: true,
          failOnError: true
        }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  }
}
