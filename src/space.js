
const bodyParser = require('body-parser');
const pg = require('pg');
const dbDev = require('../config')['development']['dbConnectionString'];
const clientDev = new pg.Client(dbDev);



var Space = function(){

};

Space.prototype.addSpace = function(query, params){
  clientDev.connect();
  clientDev.query(query, params);
};

Space.prototype.viewSpaces = function(){
  // clientDev.connect();
  clientDev.query('SELECT * FROM listings;');
}

module.exports = Space;
