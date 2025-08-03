const db = require('../functions/dbFunction.js');

const updateUser = (req, res) => {
  const { email } = req.query;
  const { password, role } = req.body; //or req.body.password, req.body.role

  if (!email) {
    return res.status(400).json({ msg: "Email is required to update an account." });
  }

  if (!password && !role) {
    return res.status(400).json({ msg: "Please provide password or role to update." });
  }

  let query = "UPDATE accounts SET ";
  const updates = [];
  const params = [];

  if (password) {
    updates.push("password = ?");
    params.push(password);
  }

  if (role) {
    updates.push("role = ?");
    params.push(role);
  }

  query += updates.join(", ");
  query += " WHERE email = ?";
  params.push(email);

  db.query(query, params, (err, result) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ msg: "Database query failed." });
    }

    if (result.affectedRows > 0) {
      return res.json({ msg: `User with email ${email} updated successfully.` });
    } else {
      return res.status(404).json({ msg: "No matching account found to update." });
    }
  });
};

module.exports = { updateUser };