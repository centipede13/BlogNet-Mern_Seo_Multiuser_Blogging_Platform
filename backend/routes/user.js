const express = require("express");
const {
  requireSignin,
  authMiddleWare,
  adminMiddleWare,
} = require("../controllers/auth");
const { read, publicProfile, update, photo } = require("../controllers/user");
const router = express.Router();

router.get("/user/profile", requireSignin, authMiddleWare, read);
router.get("/user/:username", publicProfile);
router.put("/user/update", requireSignin, authMiddleWare, update);
router.get("/user/photo/:username", photo);

module.exports = router;
