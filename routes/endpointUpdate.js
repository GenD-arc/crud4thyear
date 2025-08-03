const express = require("express");
const router = express.Router();
const { updateUser } = require("../controllers/updateUser.js");

router.put("/", updateUser);

module.exports = router;