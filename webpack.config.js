const path = require('path');

module.exports = {
  entry: {
    app: './client/src/index.jsx'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './client/dist')
  },
  mode: 'development',
  module: {
    rules: [{
      test: /\.m?jsx$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react']
        }
      }
    }]
  }
}
