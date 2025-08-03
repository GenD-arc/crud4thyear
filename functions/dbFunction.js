const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'bnsxrjedu6liizruafjz-mysql.services.clever-cloud.com',
  user: 'ulekny4oykexgq5y',
  password: 'y9Yg0SHouGHcFAmyZ4dP',
  database: 'bnsxrjedu6liizruafjz'
});


module.exports = db;
