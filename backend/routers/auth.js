const express = require("express");
const router = express.Router();

const {
  validateRegistrationData,
  validateLoginData,
} = require("../validators/auth");
// const checkValid = require("../middleware/checkValid");
const { register, login } = require("../controllers/auth");

router.put("/register", register);
router.post("/login", login);

module.exports = router;
