const express = require('express');
const { time } = require('../controllers/blog');
const router = express.Router();

router.get('/', time);

module.exports = router;