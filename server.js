var express = require('express');
var app = express();
var ejs = require('ejs');
var path = require('path');


app.get('/', function(req, res) {
    res.render(path.join(__dirname + '/views/index.ejs'));
});

app.get('/add-space', function(req, res) {
    res.render(path.join(__dirname + '/views/addSpace.ejs'));
});

app.get('/all', function(req, res) {
    res.render(path.join(__dirname + '/views/viewAll.ejs'));
});


app.get('/view-space', function(req, res) {
    res.render(path.join(__dirname + '/views/viewSpace.ejs'));
});

app.get('/booking-confirmation', function(req, res) {
    res.render(path.join(__dirname + '/views/BookingConfirmation.ejs'));
});

app.get('/add-confirmation', function(req, res) {
    res.render(path.join(__dirname + '/views/addConfirmation.ejs'));
});




app.listen(3000, function(){
  console.log("Server listening on port 3000");
});
