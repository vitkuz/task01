var opn = require('opn');
var express = require('express');
var app = express();

app.use(express.static('public'));
app.set('view engine', 'pug');

app.get('/', function (req, res) {
    res.render('index');
});

app.listen(4000, function () {
    console.log('Example app listening on port 4000!');
    opn('http://localhost:4000');
});