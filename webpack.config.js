var path = require('path')
var BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/assets/js'),
    publicPath: './dist/assets/'
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [ 'style-loader', 'css-loader' ]
    }]
  },
  plugins: [
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development, 
      // ./public directory is being served 
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['dist'] }
    })
  ]
}
