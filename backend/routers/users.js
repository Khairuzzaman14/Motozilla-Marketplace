const express = require("express");
const {
  seedUsers,
  getUsers,
  putUsers,
  postOneUser,
  patchUser,
} = require("../controllers/users");
const router = express.Router();

router.get("/seed", seedUsers);
router.get("/users", getUsers);
router.put("/users", putUsers);
router.post("/users", postOneUser);
router.patch("/users", patchUser);

module.exports = router;
