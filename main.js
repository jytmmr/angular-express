var express = require('express');
var app = express();

app.use('/api', require('./api/index'));

app.use('/bower_components',express.static(__dirname + "/bower_components"));
app.use('/',express.static(__dirname + "/public"));
app.use(function(req, res, next, err) {
    res.status(err.status || 500).send(err.message || 'Internal Server Error');
});

app.use(function(req, res) {
    // Use res.sendfile, as it streams instead of reading the file into memory.
    res.sendfile(__dirname + '/index.html');
});

//
// app.get("*", function(req, res, next) {
//   res.send(__dirname + "/index.html");
// });

app.listen(3000);
