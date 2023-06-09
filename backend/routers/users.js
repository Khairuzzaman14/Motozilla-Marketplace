const express = require("express");
const {
  seedUsers,
  getUsers,
  putUsers,
  postOneUser,
  patchUser,
  deleteUser,
} = require("../controllers/users");
const { auth, adminAuth } = require("../middleware/auth");
const checkValid = require("../middleware/checkValid");
const {
  validateInsertUserData,
  validateUpdatedUserData,
  validateDeleteUserData,
} = require("../validators/users");
const router = express.Router();

router.get("/seedUsers", seedUsers);
router.get("/users", adminAuth, checkValid, getUsers);
router.put("/users", adminAuth, validateInsertUserData, checkValid, putUsers);
router.post("/users", postOneUser);
router.patch("/users", validateUpdatedUserData, checkValid, patchUser);
router.delete("/users", validateDeleteUserData, checkValid, deleteUser);

module.exports = router;
