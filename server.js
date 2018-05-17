const express = require('express');
const app = express();
const path = require('path');

// Make the distribution directory available to public
app.use(express.static(__dirname + '/dist'));


//get index page
app.get('/index.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

//get index page
app.get('/about_me.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/about_me.html'));
});

//default to the javascript.html
app.get('/javascript.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/javascript.html'));
});

//default to the display_styling.html
app.get('/display_styling.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/display_styling.html'));
});

//default to the devops.html
app.get('/devops.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/devops.html'));
});

//default to the backend.html
app.get('/backend.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/backend.html'));
});


//default to the index page
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});


app.listen(8080, () => console.log('Example app listening on port 8080!'))
