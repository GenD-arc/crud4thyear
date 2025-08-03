const db = require('../functions/dbFunction.js');

const addUser = (req,res) => {
    const { email, password, role } = req.body

    db.query(`INSERT INTO accounts (email, password, role) VALUES (?, ?, ?)`, [email, password, role], (err, rows, fields) => {
        if(err) throw err
        res.json({msg: `User ${email} added successfully!`})
    });
}

module.exports = { addUser };