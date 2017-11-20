const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    target: 'node', // in order to ignore built-in modules like path, fs, etc.
    externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
    entry: {
        bundle: [
            './src/server/index.js',
        ],
    },
    output: {
        path: path.resolve(__dirname, 'server'),
        filename: 'index.js',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: [
                    'babel-loader',
                    // 'eslint-loader',
                ],
            },
        ],
    },
};
