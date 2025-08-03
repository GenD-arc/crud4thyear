const express = require("express");
const router = express.Router();
const { searchUser } = require("../controllers/searchUser.js");

router.get("/", searchUser);


/*
router.get("/:role", (req,res) =>{

    const role =  req.params.role;
    const email = req.query.email;

  db.query(`SELECT * FROM accounts WHERE role = ? OR email = ?`, [role, email], (err, rows) => {

    if (err) throw err;

    if(rows.length > 0 ){
        res.json(rows)
    }else{
        res.status(400).json({msg: `No ${role}s found`})
    }
  })
});
*/

module.exports = router;