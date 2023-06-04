const { body } = require("express-validator");

const validateInsertUserData = [
  body("firstName", "firstName is required").not().isEmpty(),
  body("firstName", "must have a min of 1 and a max of 50 characters").isLength(
    {
      min: 1,
      max: 50,
    }
  ),
  body("lastName", "lastName is required").not().isEmpty(),
  body("lastName", "must have a min of 1 and a max of 50 characters").isLength({
    min: 1,
    max: 50,
  }),
  body("address", "address is required").not().isEmpty(),
  body("address", "must have a min of 1 and a max of 100 characters").isLength({
    min: 1,
    max: 100,
  }),
  body("email", "email is required").not().isEmpty(),
  body("email", "must have a min of 1 and a max of 50 characters").isLength({
    min: 1,
    max: 50,
  }),
  body("contactNo", "contactNo is required").not().isEmpty(),
  body("contactNo", "must be 8 character").isLength({
    min: 8,
    max: 8,
  }),
  body("password", "password is required").not().isEmpty(),
  body("password", "must have a min of 1 and a max of 20 characters").isLength({
    min: 1,
    max: 20,
  }),
];

const validateDeleteUserData = [
  body("userID", "userID is required").not().isEmpty(),
  body("userID", "userID is a uuid").isUUID(),
];

const validateUpdatedUserData = [
  body("userID", "userID is required").not().isEmpty(),
  body("firstName", "must have a min of 1 and a max of 50 characters")
    .optional()
    .isLength({
      min: 1,
      max: 50,
    }),

  body("lastName", "must have a min of 1 and a max of 50 characters")
    .optional()
    .isLength({
      min: 1,
      max: 50,
    }),

  body("address", "must have a min of 1 and a max of 100 characters")
    .optional()
    .isLength({
      min: 1,
      max: 100,
    }),

  body("contactNo", "must be 8 character").optional().isLength({
    min: 8,
    max: 8,
  }),

  body("password", "must have a min of 1 and a max of 20 characters")
    .optional()
    .isLength({
      min: 1,
      max: 20,
    }),
];

module.exports = {
  validateInsertUserData,
  validateDeleteUserData,
  validateUpdatedUserData,
};
