const bodyParser = require('body-parser');
const pg = require('pg');
const dbDev = require('../config')['development']['dbConnectionString'];
const clientDev = new pg.Client(dbDev);
var express = require('express');
var app = express();
var ejs = require('ejs');
var path = require('path');



function Space(){

  this.title;
  this.listing_desc;
  this.owner;
  this.price;
  this.address;

}

Space.prototype.addSpace = function(query, params){
  clientDev.connect();
  return clientDev.query(query, params);
}

  // viewSpaces: function(){
  //   clientDev.connect()
  //   clientDev.query('SELECT * FROM listings;', (err, res) => {
  //     console.log(err, res)
  //     clientDev.end()
  //   })
  // }

module.exports = Space;
