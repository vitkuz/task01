const gulp = require('gulp');
const path = require('path');
const rimraf = require('rimraf');
const $ = require('gulp-load-plugins')();

const webpack = require('webpack-stream');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const nodemon = require('nodemon');

gulp.task("server:clean", cb => {
    rimraf('./build', () => cb())
});

gulp.task("client:clean", cb => {
    rimraf('./public/js', () => cb())
});

function compileClient() {
    return gulp.src('src/client/index.js')
        .pipe(webpack({
            entry: {
                index: './src/client/index.js'
            },
            output: {
                path: path.resolve(__dirname, 'public'),
                filename: 'bundle.js'
            },
            devtool: 'inline-source-map',
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        exclude: /(node_modules|bower_components)/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: ['env', 'react'],
                            }
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
                new ExtractTextPlugin("../css/styles.css"),
            ]
        }))
        .pipe(gulp.dest('public/js'))
        .pipe($.livereload());
}


function watchClient() {

    $.livereload.listen();

    return gulp
        .watch("./src/client/**/*.js", compileClient)
        .on("error", ()=> {});
}

gulp.task("client:build",
    gulp.series("client:clean",
        compileClient
    )
);

gulp.task("client:watch",
    gulp.series("client:build",
        watchClient
    )
);

gulp.task("client:dev", gulp.series(
    "client:build",
    gulp.parallel(
        watchClient,
        function nodemon() {
            return $.nodemon({
                script: "./src/server/index.js",
                watch:"src/server"
            })
        }
    )
))