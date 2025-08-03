const db = require('../functions/dbFunction.js');

const deleteUser = (req, res) => {
  const { email } = req.query;

  if (!email) {
    return res.status(400).json({ msg: "Email is required to delete an account." });
  }

  db.query("DELETE from accounts WHERE email = ?", [email], (err, result) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ msg: "Database query failed." });
    }

    if (result.affectedRows > 0) {
      return res.json({ msg: `User with email ${email} deleted successfully.` });
    } else {
      return res.status(404).json({ msg: "No matching account found to delete." });
    }
  });
};

module.exports = { deleteUser };