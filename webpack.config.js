var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

// plugins =====================================================================================

// Plugin for extracting text into separate output file.
// Here we use it to extract css content into '[name].bundle.css' file.
// In order to do that, you also need to tell webpack what kind of text should be extracted, 
// something like this: ExtractTextPlugin.extract(.....)
// for more detail see the 'loaders' configs below.
var extractCSS = new ExtractTextPlugin('stylesheets/[name].bundle.css');

// plugin to apply or generate html template.
var indexTemplate = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
});

// copy specific files to build path
// ex: Use this plugin to copy html files so that we can reference them by 'templateUrl' in custom directive.
var copyFiles = new CopyWebpackPlugin([
  {
    context: 'src',
    from: '**/*.html',
  }
]);


// Automatically move all modules defined outside of application directory to vendor bundle.
// If you are using more complicated project structure, consider to specify common chunks manually.
var commonChunk = new webpack.optimize.CommonsChunkPlugin( {
  name: 'vendor',
  minChunks: function (module, count) {
    return module.resource && module.resource.indexOf(path.resolve(__dirname, 'src')) === -1;
  }
});

// config =======================================================================================

module.exports = {
  entry: {
    app: './src/app.js',
    // Specify which vendor module should be bundled together.
    // All thease modules will be bundled together automatically whatever they has been imported in your app or not.
    // So, in this way you don't need to import thease modules in your app anymore if you 
    // don't need to use imported object. 
    // ex: In line-chart.module.js, we can just inject 'gridshore.c3js.chart' module without importing c3-angular.
    vendor: [
      'angular',
      'angular-ui-router',
      'angular-material',
      'angular-material/angular-material.css',
      'd3',
      'c3',
      'c3-angular'
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
        exclude: /(node_modules)/,
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
      },
      {
        // HTML LOADER
        // Reference: https://github.com/webpack/raw-loader
        // Allow loading html through js
        // ex: In line-chart.directive.js, use 'require' to load html template.
        test: /\.html$/,
        loader: 'raw'
      }
    ]
  },

  // options for webpack-dev-server
  // doc: https://webpack.github.io/docs/webpack-dev-server.html#webpack-dev-server-cli
  devServer: {
    hot: true,
    colors: true,
    outputPath: './build'
  },

  // apply plugins
  plugins: [
    indexTemplate,
    extractCSS,
    copyFiles,
    commonChunk
  ],
  
  resolve: {
    modulesDirectories: ["node_modules"]
  }
};