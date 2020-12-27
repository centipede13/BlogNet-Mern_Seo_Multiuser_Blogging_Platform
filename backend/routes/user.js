const express = require("express");
const {
  requireSignin,
  authMiddleWare,
  adminMiddleWare,
} = require("../controllers/auth");
const { read, publicProfile } = require("../controllers/user");
const router = express.Router();

router.get("/profile", requireSignin, authMiddleWare, read);
router.get("/user/:username", publicProfile);

module.exports = router;
