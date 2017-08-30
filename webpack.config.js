const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const config = require('dotenv').config();
console.log("conf:",JSON.stringify(config));

const VENDOR_LIBS = ['lodash','react','react-dom'];

module.exports = {
    // context: __dirname + "./src",
    entry: {
        bundle:'./src/client/index.js',
        vendor: VENDOR_LIBS
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
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
        new ExtractTextPlugin("css/styles.css"),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({name:'vendor'}),
        new HtmlWebpackPlugin({
            template:'public/index.html'
        }),
        new WebpackCleanupPlugin({
            preview: true,
        })
    ]
};