const path = require('path')
    , webpack = require('webpack')

module.exports = {
  entry: {
    vanilla: path.resolve(__dirname, './front/vanilla/index')
  },
  output: {
    path: path.join(__dirname, './assets/dist/'),
    filename: '[name].bundle.js',
    chunkFilename: '[id].chunk.js'
  },
  devServer: {
    port: 3000,
    contentBase: path.join(__dirname, "./dist"),
    watchContentBase: true,
    historyApiFallback: {
      index: 'index.html'
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
}
