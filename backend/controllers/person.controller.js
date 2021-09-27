const { validationResult } = require('express-validator');

const handleUser = (req, res) => {
  const { name, age, email } = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // Validation errors
    return res.status(400).json({ errors: errors.array() });
  }

  // Handle the data...

  res.status(200).json({ message: 'The server received the data' });
};

module.exports = { handleUser };
