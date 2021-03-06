var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var port = 3000;

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  contentBase: __dirname + '/client',
  hot: true
}).listen(port, 'localhost', function(err, result) {
  if (err) {
    console.log(err);
  }
  console.log('Listening on port ' + port);
});
