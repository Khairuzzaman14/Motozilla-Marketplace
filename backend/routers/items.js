const express = require("express");
const {
  seedItems,
  getItems,
  putItems,
  postOneItem,
  patchItem,
  deleteItem,

  getItemsFromCart,
  deleteItemFromCart,
  patchBoughtItems,
  postSellerItem,
  postBuyerItem,
} = require("../controllers/items");
const {
  validateInsertItemData,
  validateUpdatedItemData,
  validateDeleteItemData,
} = require("../validators/items");
const checkValid = require("../middleware/checkValid");

const router = express.Router();

router.get("/seedItems", seedItems);
router.get("/items/:userID", getItems);
router.put("/items", validateInsertItemData, checkValid, putItems);

router.post("/items", postOneItem);

router.delete("/items", validateDeleteItemData, checkValid, deleteItem);
router.post("/items/:cartID", getItemsFromCart);
router.patch("/items/:cartID", deleteItemFromCart);
router.patch("/items", patchBoughtItems);
router.post("/selleritems", postSellerItem);
router.post("/buyeritems", postBuyerItem);
module.exports = router;
