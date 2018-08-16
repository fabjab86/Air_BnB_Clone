
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

Space.prototype.viewAllSpaces = function(){

  clientDev.query(
    'SELECT * FROM listings;',
    function(data){}
  )
};

Space.prototype.checkDatabase = function(){
  clientDev.query('SELECT * FROM listings');

};

Space.prototype.isConnected = function(){
  if (clientDev.connect()) {return true}
};

module.exports = Space;
