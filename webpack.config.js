var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');


// plugins =====================================================================================

var extractCSS = new ExtractTextPlugin('stylesheets/[name].bundle.css');

var indexTemplate = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
});

var copyModuleTemplate = new CopyWebpackPlugin([{
  context: 'src',
  from: '**/*.html',
}]);


var commonChunk = new webpack.optimize.CommonsChunkPlugin( 
  "vendor", //chunkName
  "vendor.bundle.js" //filename
);

// config =======================================================================================

module.exports = {
  entry: {
    app: './src/app.js',
    vendor: [
      'angular',
      'angular-ui-router',
      'angular-material',
      'angular-material/angular-material.css',
      'c3-angular',
      //'c3',
      'd3'
    ]
  },

  output: {
    // Absolute output directory
    path: __dirname + '/build',

    // Output path from the view of the page
    // Uses webpack-dev-server in development
    //publicPath: 'http://localhost:8080/',

    // Filename for entry points
    // Only adds hash in build mode
    filename: '[name].bundle.[hash].js',
  },
  
  // Tool to enhance debugging. You can find the all tools in official doc:
  // https://webpack.github.io/docs/configuration.html#devtool
  devtool: 'source-map',

  module: {
    preLoaders: [],
    
    loaders: [
      {
        // JS LOADER
        // Reference: https://github.com/babel/babel-loader
        // Transpile .js files using babel-loader
        // Compiles ES6 and ES7 into ES5 code
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.scss$/i,
        //Moves every 'require' or 'import' css in entry chunks into a separate css output file.
        loader: ExtractTextPlugin.extract(
          'style', // backup loader when not building .css file
          'css?sourceMap!sass' // loaders to preprocess CSS
        )
      },
      {
        test: /\.css/i,
        //Moves every 'require' or 'import' css in entry chunks into a separate css output file.
        loader: ExtractTextPlugin.extract(
          'style', // backup loader when not building .css file
          'css?sourceMap' // loaders to preprocess CSS
        )
      }
    ]
  },

  devServer: {
    outputPath: './build'
  },

  plugins: [
    indexTemplate,
    extractCSS,
    copyModuleTemplate,
    commonChunk
  ]
};