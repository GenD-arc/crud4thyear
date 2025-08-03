const express = require('express');
const router = express.Router();
const {viewUser} = require('../controllers/viewUser');

router.get('/', viewUser);

module.exports = router;