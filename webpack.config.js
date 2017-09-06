const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const config = require('dotenv').config();
console.log("env config:",config);

process.env.NODE_ENV = config.parsed.NODE_ENV;
console.log("NODE_ENV",process.env.NODE_ENV);

const VENDOR_LIBS = ['lodash','react','react-dom','redux-form', 'react-redux', 'redux'];

module.exports = {
    // context: __dirname + "./src",
    entry: {
        bundle:[
            'react-hot-loader/patch',
            // activate HMR for React

            'webpack-dev-server/client?http://localhost:4000',
            // bundle the client for webpack-dev-server
            // and connect to the provided endpoint

            'webpack/hot/only-dev-server',
            // bundle the client for hot reloading
            // only- means to only hot reload for successful updates

            './src/client/index.js'
        ],
        vendor: VENDOR_LIBS
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].[hash].js',
        publicPath: '/'
    },
    devtool: 'inline-source-map',
    devServer: {
        host: 'localhost',
        contentBase: path.join(__dirname, "build"),
        historyApiFallback: true,
        hot:true,
        port:4000,
        headers: {'Access-Control-Allow-Origin': '*'}
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
        new webpack.optimize.CommonsChunkPlugin({names:['vendor','manifest']}),
        new HtmlWebpackPlugin({
            template:'src/templates/index.html',
            favicon: 'src/images/favicon.ico'
        }),
        new WebpackCleanupPlugin({
            preview: true,
        })
    ]
};