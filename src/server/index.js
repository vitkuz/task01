const express = require('express');
const fs = require('fs');

const config = require('dotenv').config();

const app = express();

const port = process.env.PORT || config.parsed.PORT || 4000;
process.env.NODE_ENV = config.parsed.NODE_ENV || 'development';

app.use(express.static('build'));

app.get('*', (req, res) => {
    fs.readFile('./build/index.html', 'utf8', (err, file) => {
        if (err) {
            return console.log(err);
        }
        return res.send(file);
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});
