const express = require("express");
const {
  seedItems,
  getItems,
  putItems,
  postOneItem,
  patchItem,
  deleteItem,
} = require("../controllers/items");
const {
  validateInsertItemData,
  validateUpdatedItemData,
  validateDeleteItemData,
} = require("../validators/items");
const checkValid = require("../middleware/checkValid");

const router = express.Router();

router.get("/seedItems", seedItems);
router.get("/items", getItems);
router.put("/items", validateInsertItemData, checkValid, putItems);
router.post("/items", postOneItem);
router.patch("/items", validateUpdatedItemData, checkValid, patchItem);
router.delete("/items", validateDeleteItemData, checkValid, deleteItem);

module.exports = router;
