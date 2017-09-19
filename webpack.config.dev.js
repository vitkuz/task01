const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const VENDOR_LIBS = ['react', 'react-dom', 'redux-form', 'react-redux', 'redux'];

module.exports = {
    // context: __dirname + './src',
    entry: {
        bundle: [
            'react-hot-loader/patch',
            // activate HMR for React

            'webpack-dev-server/client?http://localhost:4000',
            // bundle the client for webpack-dev-server
            // and connect to the provided endpoint

            'webpack/hot/only-dev-server',
            // bundle the client for hot reloading
            // only- means to only hot reload for successful updates

            './src/client/index.jsx',
        ],
        vendor: VENDOR_LIBS,
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].[hash].js',
        publicPath: '/',
    },
    devtool: 'inline-source-map',
    devServer: {
        host: 'localhost',
        contentBase: path.join(__dirname, 'build'),
        historyApiFallback: true,
        hot: true,
        port: 4000,
        headers: { 'Access-Control-Allow-Origin': '*' },
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /(node_modules)/,
                use: [
                    'babel-loader',
                ],
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader'],
                }),
            },
            {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
                use: [{
                    loader: 'file-loader',
                }],
            },
        ],
    },
    plugins: [
        new ExtractTextPlugin('css/styles.css'),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({ names: ['vendor', 'manifest'] }),
        new HtmlWebpackPlugin({
            template: 'src/templates/index.html',
            favicon: 'src/images/favicon.ico',
        }),
        new CopyWebpackPlugin([
            { from: 'public' },
        ]),
        new WebpackCleanupPlugin({
            preview: true,
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development'),
                WEBPACK: true,
            },
        }),
    ],
};
