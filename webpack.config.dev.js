var config  = require('./webpack.config');

// Tool to enhance debugging. You can find the all tools in official doc:
// https://webpack.github.io/docs/configuration.html#devtool
config.devtool = 'eval';

module.exports = config;