const express = require('express');
const router = express.Router();

// Validators
const { runValidation } = require('../validators');
const { createTagValidator } = require('../validators/tag');

// Controllers
const { requireSignin, adminMiddleWare } = require('../controllers/auth');
const { create, list, read, remove } = require('../controllers/tag');

router.post('/tag', createTagValidator, runValidation, requireSignin, adminMiddleWare, create);
router.get('/tags', list);
router.get('/tag/:slug', read);
router.delete('/tag/:slug', requireSignin, adminMiddleWare, remove);

module.exports = router;