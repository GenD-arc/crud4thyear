const express = require("express");
const router = express.Router();
const { deleteUser } = require("../controllers/deleteUser.js");

router.delete("/", deleteUser);

module.exports = router;