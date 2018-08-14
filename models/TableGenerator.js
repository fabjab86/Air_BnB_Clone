const pg = require('pg')
const dbDev = require('../config')['development']['dbConnectionString']
const dbTest = require('../config')['test']['dbConnectionString']
const clientDev = new pg.Client(dbDev)
const clientTest = new pg.Client(dbTest)


clientTest.connect()
clientTest.query('CREATE TABLE listings(id SERIAL PRIMARY KEY, title VARCHAR(60), listing_desc VARCHAR(200), owner VARCHAR(60), price NUMERIC(6,2), Address VARCHAR(200));', (err, res) => {
  console.log(err, res)
  clientTest.end()
})

clientDev.connect()
clientDev.query('CREATE TABLE listings(id SERIAL PRIMARY KEY, title VARCHAR(60), listing_desc VARCHAR(200), owner VARCHAR(60), price NUMERIC(6,2), Address VARCHAR(200));', (err, res) => {
  console.log(err, res)
  clientDev.end()
})