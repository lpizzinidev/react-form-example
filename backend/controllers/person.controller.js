const { validationResult } = require('express-validator');

const handleUser = (req, res) => {
  const { name, age } = req.body;

  // Handle the data...
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  res.status(200).json({ message: 'The server received the data' });
};

module.exports = { handleUser };
