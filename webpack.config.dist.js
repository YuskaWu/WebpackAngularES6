var webpack = require('webpack');
var config  = require('./webpack.config');

// Tool to enhance debugging. You can find the all tools in official doc:
// https://webpack.github.io/docs/configuration.html#devtool
config.devtool = 'source-map';

config.plugins = config.plugins.concat([

  // Reduces bundles total size
  new webpack.optimize.UglifyJsPlugin({
    mangle: {

      // You can specify all variables that should not be mangled.
      // For example if your vendor dependency doesn't use modules
      // and relies on global variables. Most of angular modules relies on
      // angular global variable, so we should keep it unchanged
      
      // In this case the plugin will not mangle any occurrence of ‘$super’, ‘$’, ‘exports’, ‘require’ or 'angular'.
      except: ['$super', '$', 'exports', 'require', 'angular']
    }
  })
]);

module.exports = config;