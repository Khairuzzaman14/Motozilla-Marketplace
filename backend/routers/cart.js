const express = require("express");
const { getCarts, postOneCart, deleteCart } = require("../controllers/carts");

const router = express.Router();

router.get("/carts", getCarts);
router.post("/carts", postOneCart);
router.delete("/carts", deleteCart);

module.exports = router;
