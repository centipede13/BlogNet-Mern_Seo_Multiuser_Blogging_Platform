const express = require("express");
const {
  signup,
  signin,
  signout,
  requireSignin,
  forgotPassword,
  resetPassword,
  preSignup,
  googleLogin,
} = require("../controllers/auth");
const router = express.Router();

// Validators
const { runValidation } = require("../validators");
const {
  userSignupValidator,
  userSigninValidator,
  forgotPasswordValidator,
  resetPasswordValidator,
} = require("../validators/auth");

router.post("/pre-signup", userSignupValidator, runValidation, preSignup);
router.post("/signup", signup);
router.post("/signin", userSigninValidator, runValidation, signin);
router.get("/signout", signout);
router.put(
  "/forgot-password",
  forgotPasswordValidator,
  runValidation,
  forgotPassword
);
router.put(
  "/reset-password",
  resetPasswordValidator,
  runValidation,
  resetPassword
);

// Google-Login
router.post("/google-login", googleLogin);

module.exports = router;
