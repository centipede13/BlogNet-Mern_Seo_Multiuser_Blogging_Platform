const express = require('express');
const { requireSignin, authMiddleWare, adminMiddleWare } = require('../controllers/auth');
const { read } = require('../controllers/user');
const router = express.Router();

router.get('/profile', requireSignin, authMiddleWare, read);

module.exports = router;