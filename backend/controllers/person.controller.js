const { validationResult } = require('express-validator');

const handlePerson = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // Validation errors
    return res.status(400).json({ errors: errors.array() });
  }

  // Handle the data...
  const { name, age, email } = req.body;

  res.status(200).json({ message: 'The server received the data' });
};

module.exports = { handlePerson };
