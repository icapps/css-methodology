var webpack           = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')

var autoprefixer = require('autoprefixer');
var precss       = require('precss');
var fontMagician = require('postcss-font-magician');
var atImport     = require('postcss-import');
var bemLinter    = require('postcss-bem-linter');
var formatter    = require('postcss-reporter/lib/formatter');


module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: "style-loader!css-loader!postcss-loader"
      }
    ],
  },
  postcss: function(webpack) {
    return [
      atImport({
        // addDependencyTo: webpack
      }),
      precss,
      autoprefixer({ browsers: ['last 2 versions'] }),
      fontMagician,
      // bemLinter('bem'),
    ];
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Custom template',
      template: 'src/index.html', // Load a custom template
      inject: 'body' // Inject all scripts into the body
    })
  ],
  devtool: 'source-map',
}
