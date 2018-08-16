var express = require('express');
var app = express();
const bodyParser = require('body-parser');
var ejs = require('ejs');
var path = require('path');
const pg = require('pg')
const dbDev = require('./config')['development']['dbConnectionString']
const clientDev = new pg.Client(dbDev)

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
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

app.post('/add-space', function(req, res) {
  console.log('post body', req.body);

  clientDev.connect()

  const sql = 'INSERT INTO listings (title, listing_desc, owner, price, address) VALUES ($1, $2, $3, $4, $5);'
  const params = [req.body.title, req.body.listing_desc, req.body.owner, req.body.price, req.body.address];
  clientDev.query(sql, params).then(function(result){
    console.log('result?', result);
    res.redirect('/add-confirmation');
  }).catch(function(err){
    console.log('err', err);
    res.redirect('/add-confirmation');
  });
});





app.listen(3000, function(){
  console.log("Server listening on port 3000");
});
