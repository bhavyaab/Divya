'use strict';

require('dotenv').load();
const production = process.env.NODE_ENV === 'production';

const {DefinePlugin, EnvironmentPlugin} = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const UglifyPlugin = require('uglifyjs-webpack-plugin');
const ExtractPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
let plugins = [
  new EnvironmentPlugin(['NODE_ENV']),
  new ExtractPlugin('bundle.css'),
  new HtmlPlugin({ template: `${__dirname}/src/index.html` }),
  new DefinePlugin({
    __DEBUG__: JSON.stringify(!production),
  }),
  new CopyWebpackPlugin([{
    from: `${__dirname}/src/images`,
    to: `${__dirname}/build/images/`
  }]),
];
if (production) {
  plugins = plugins.concat([ new CleanPlugin(), new UglifyPlugin() ]);
}
module.exports = {
  plugins,
  entry: `${__dirname}/src/main.js`,
  devtool: production ? undefined : 'source-map',
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle.js',
    publicPath: process.env.CDN_URL,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-2'],
        },
      },
      {
        test: /\.scss$/,
        loader: ExtractPlugin.extract(['css-loader', 'sass-loader']),
      },
      {
        test: /\.(jpg|jpeg|gif|png|tiff|svg)$/,
        exclude: /\.glyph.svg/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 6000,
              name: `${__dirname}/image/[name].[ext]`,
            },
          },
        ],
      },
    ],
  },
};
