const { body } = require('express-validator');

const validate = (method) => {
  switch (method) {
    case 'handleUser': {
      return [
        body('name', 'Name is required').not().isEmpty().trim().escape(),
        body('age', 'Insert a valid age value')
          .not()
          .isEmpty()
          .isNumeric()
          .trim()
          .escape(),
        body('email', 'Insert a valid e-mail')
          .not()
          .isEmpty()
          .isEmail()
          .normalizeEmail(),
      ];
    }
  }
};

module.exports = { validate };
