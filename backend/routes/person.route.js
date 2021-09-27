const express = require('express');
const router = express.Router();

const { handleUser } = require('../controllers/person.controller');

const { validate } = require('../middlewares/validator.middleware');

router.post('/person', validate('handleUser'), handleUser);

module.exports = router;
