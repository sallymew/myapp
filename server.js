var path = require('path'),
    bodyParser = require('body-parser'),
    expresss = require('express');

var app = expresss();
app.use('/', expresss.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.listen(8888);
console.log('Server started: http://localhost:8888/');