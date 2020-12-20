const express = require("express");
const { create } = require("../controllers/blog");
const { requireSignin, adminMiddleWare } = require("../controllers/auth");
const router = express.Router();

router.post("/blog", requireSignin, adminMiddleWare, create);

module.exports = router;
