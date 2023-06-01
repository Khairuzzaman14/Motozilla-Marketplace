const express = require("express");
const {
  seedUsers,
  getUsers,
  putUsers,
  postOneUser,
  patchUser,
  deleteUser,
} = require("../controllers/users");
const { auth } = require("../middleware/auth");
const checkValid = require("../middleware/checkValid");
const router = express.Router();

router.get("/seedUsers", seedUsers);
router.get("/users", checkValid, auth, getUsers);
router.put("/users", putUsers);
router.post("/users", postOneUser);
router.patch("/users", patchUser);
router.delete("/users", deleteUser);

module.exports = router;
