const { body } = require("express-validator");

const validateInsertItemData = [
  body("name", "name is required").not().isEmpty(),
  body("name", "must have a min of 1 and a max of 50 characters").isLength({
    min: 1,
    max: 50,
  }),
  body("type", "type is required").not().isEmpty(),
  body("type", "must have a min of 1 and a max of 50 characters").isLength({
    min: 1,
    max: 50,
  }),
  body("description", "description is required").not().isEmpty(),
  body(
    "description",
    "must have a min of 1 and a max of 1000 characters"
  ).isLength({
    min: 1,
    max: 1000,
  }),
  body("price", "price is required").not().isEmpty(),
  body("price", "must have a min of 1 and a max of 10 characters").isLength({
    min: 1,
    max: 10,
  }),
];

const validateDeleteItemData = [
  body("itemID", "itemID is required").not().isEmpty(),
];

const validateUpdatedItemData = [
  body("itemID", "itemID is required").not().isEmpty(),
  body("name", "must have a min of 1 and a max of 50 characters")
    .optional()
    .isLength({
      min: 1,
      max: 50,
    }),

  body("type", "must have a min of 1 and a max of 50 characters")
    .optional()
    .isLength({
      min: 1,
      max: 50,
    }),

  body("description", "must have a min of 1 and a max of 1000 characters")
    .optional()
    .isLength({
      min: 1,
      max: 1000,
    }),

  body("price", "must have a min of 1 and a max of 10 characters")
    .optional()
    .isLength({
      min: 1,
      max: 10,
    }),
];

module.exports = {
  validateInsertItemData,
  validateDeleteItemData,
  validateUpdatedItemData,
};
