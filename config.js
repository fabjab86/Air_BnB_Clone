//require('dotenv').config()

module.exports = {
  'development': {
    dbConnectionString: 'postgres://localhost:5432/popanola',
  },
  'test': {
    dbConnectionString: 'postgres://localhost:5432/testpopanola',
  }
}