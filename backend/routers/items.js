const express = require("express");
const { seedItems } = require("../controllers/items");

const router = express.Router();

router.get("/seedItems", seedItems);

module.exports = router;
