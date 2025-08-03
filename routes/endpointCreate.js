const express = require('express');
const router = express.Router();
const { addUser } = require('../controllers/addUser.js');

router.post("/", addUser);

module.exports = router;