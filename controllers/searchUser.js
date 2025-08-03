const db = require('../functions/dbFunction.js');

const searchUser = (req, res) => {
  const { role, email } = req.query;

  if (!role && !email) {
    return res.status(400).json({ msg: "Please provide a role or email to search." });
  }

  let query = "SELECT * FROM accounts WHERE ";
  const params = [];

  if (role) {
    query += "role = ?";
    params.push(role);
  }

  if (email) {
    if (role) query += " OR ";
    query += "email = ?";
    params.push(email);
  }

  db.query(query, params, (err, rows) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ msg: "Database query failed." });
    }

    if (rows.length > 0) {
      return res.json(rows);
    } else {
      return res.status(404).json({ msg: "No matching accounts found." });
    }
  });
}

module.exports = { searchUser };