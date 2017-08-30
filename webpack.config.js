const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const webpack = require('webpack');

const config = require('dotenv').config();

console.log("consf!!!",JSON.stringify(config));

module.exports = {
    // context: __dirname + "./src",
    entry: './src/client/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, "public"),
        // inline: true,
        hot:true,
        port:3000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    //resolve-url-loader may be chained before sass-loader if necessary
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
                use: [{
                    loader: "file-loader"
                }]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("../build/css/styles.css"),
        new webpack.HotModuleReplacementPlugin(),
        new WebpackCleanupPlugin({
            preview: true,
        })
    ]
};