'use strict';
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const pkg = require('./package.json');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractLESS = new ExtractTextPlugin('app.test.min.css');


module.exports = {
	entry: './build/index.js',
	output: {
		path: path.resolve(__dirname, './public/' + pkg.name + '/'),
		filename: 'app.test.min.js',
		chunkFilename: 'chunk.[name].min.js',
		publicPath: '/' + pkg.name + '/'
	},
	module: {
		loaders: [
			{
				test: /\.js?$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader'
			},
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: {
					presets: ['react']
				}
			},
			{
                test: /\.less$/,
                loader: extractLESS.extract([ 'css-loader', 'less-loader'])
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'file-loader',
                query: {
                    name: 'font/[name].[ext]'
                }
            }

		]
	},
	plugins: [
		extractLESS
	]
};