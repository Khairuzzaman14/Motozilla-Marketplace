const express = require("express");
const {
  getCarts,
  postOneCart,
  deleteCart,
  seedCarts,
  patchCart,
} = require("../controllers/carts");
const { adminAuth } = require("../middleware/auth");
const checkValid = require("../middleware/checkValid");

const router = express.Router();

router.get("/seedCarts", seedCarts);
router.get("/carts", getCarts);
router.post("/carts", postOneCart);
router.patch("/carts", patchCart);
router.delete("/carts", adminAuth, checkValid, deleteCart);

module.exports = router;
