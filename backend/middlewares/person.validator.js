const { body } = require('express-validator');

const validatePerson = (method) => {
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
      ];
    }
  }
};

module.exports = { validatePerson };
