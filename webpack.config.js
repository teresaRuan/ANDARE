var webpack = require('webpack');
var  ExtractTextPlugin= require('extract-text-webpack-plugin');
var path = require('path');
var values = require('postcss-modules-values');

module.exports={
  entry:'./app/index.js',
  output: {
      filename: 'bundle.js',
      path: path.join(__dirname, 'dist'),
      publicPath: '/static/'
    },
  module:{
    loaders:[
      {
        test:/\.jsx?$/,
        exclude:/node_modules/,
        loader:'babel',
        query:{
          presets:['es2015','stage-0','react']
        }
      },
      {
        test:/\.css$/,
        loader:ExtractTextPlugin.extract('style-loader','css-loader?modules&localIdentName=[name]__[local]--[hash:base64:5]','postcss-loader')
      },
      {
        test:/\.(jpeg|jpg|png)$/,
      loader:'url-loader'
    }
    ]
  },
  postcss:[values],
  plugins:[
    new ExtractTextPlugin('style.css',{allChunks:true})
  ]
}
