var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/dev-server',
    './client/app'
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/client/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loaders: ['react-hot', 'jsx?harmony'] }
    ]
  }
};
