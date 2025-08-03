const db = require('../functions/dbFunction.js');

const viewUser = (req, res) => {
  db.query('SELECT * from accounts', (err, rows, fields) => {
    if (err) 
      console.error('Error fetching data from database:', err);
    
    res.json(rows);
  });
}

module.exports = { viewUser };