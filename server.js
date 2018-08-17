var express = require('express');
var mustacheExpress = require('mustache-express');
var app = express();
const bodyParser = require('body-parser');
var ejs = require('ejs');
var path = require('path');
// const { Pool } = require('pg')
const pg = require('pg');
const dbDev = require('./config')['development']['dbConnectionString'];
const clientDev = new pg.Client(dbDev);
var Space = require('./src/space.js');



app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

const mustache = mustacheExpress();
mustache.cache = null;
app.engine('mustache', mustache);
app.set('view engine', 'mustache');

app.get('/', function(req, res) {
    res.render(path.join(__dirname + '/views/index.mustache'));
});

app.get('/add-space', function(req, res) {
    res.render(path.join(__dirname + '/views/addSpace.mustache'));
});

app.get('/all', function(req, res) {
    const clientDev = new pg.Client(dbDev);
    clientDev.connect()
    .then(() => {
      return clientDev.query('SELECT * FROM listings;');
    })
    .then((results) => {
      console.log('results?', results);
      res.render(path.join(__dirname + '/views/viewAll.mustache'), results);
    })
    .catch((err) => {
      console.log('error', err)
    });
});
    


app.get('/view-space', function(req, res) {
    res.render(path.join(__dirname + '/views/viewSpace.mustache'));
});

app.get('/booking-confirmation', function(req, res) {
    res.render(path.join(__dirname + '/views/BookingConfirmation.mustache'));
});

app.get('/add-confirmation', function(req, res) {
    res.render(path.join(__dirname + '/views/addConfirmation.mustache'));
});

app.post('/add-space', function(req, res) {
    const clientDev = new pg.Client(dbDev);
    clientDev.connect()
    const sql = 'INSERT INTO listings (title, listing_desc, owner, price, address) VALUES ($1, $2, $3, $4, $5);'
    const params = [req.body.title, req.body.listing_desc, req.body.owner, req.body.price, req.body.address];
    //var space = new Space()
    clientDev.query(sql, params);
    //space.addSpace(sql, params)
    res.redirect('/add-confirmation');
});





app.listen(3000, function(){
  console.log("Server listening on port 3000");
});
