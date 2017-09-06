var opn = require('opn');
var path = require('path');
var express = require('express');
import fs from 'fs';

import React from 'react';

var app = express();

const config = require('dotenv').config();
const port = process.env.PORT || config.parsed.PORT || 4000;
process.env.NODE_ENV = config.parsed.NODE_ENV;

if (process.env.NODE_ENV !== 'production') {
    var webpackMiddleware = require("webpack-dev-middleware");
    var webpack = require('webpack');
    var webpackConfig = require('../../webpack.config.js');
    app.use(webpackMiddleware(webpack(webpackConfig)));
} else {

    app.use(express.static('build'));
    app.get('*', () => {

        fs.readFile('./build/index.html', 'utf8', function (err, file) {
            if (err) {
                return console.log(err);
            }
            res.send(file);


        });
    });

}


// app.set('view engine', 'pug');


app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);

    if (process.env.NODE_ENV !== 'production') {
        opn(`http://localhost:${port}`);
    }
});