import express from 'express';
import fs from 'fs';

const config = require('dotenv').config();
const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../../webpack.config.js');

const app = express();

const port = process.env.PORT || config.parsed.PORT || 4000;
process.env.NODE_ENV = config.parsed.NODE_ENV;

if (process.env.NODE_ENV !== 'production') {
    app.use(webpackMiddleware(webpack(webpackConfig)));
} else {
    app.use(express.static('build'));
    app.get('*', (req, res) => {
        fs.readFile('./build/index.html', 'utf8', (err, file) => {
            if (err) {
                return console.log(err);
            }
            res.send(file);
        });
    });
}

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});
