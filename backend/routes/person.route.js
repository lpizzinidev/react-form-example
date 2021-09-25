const express = require('express');
const router = express.Router();

const { handleUser } = require('../controllers/person.controller');

const { validatePerson } = require('../middlewares/person.validator');

router.post('/person', validatePerson('handleUser'), handleUser);

module.exports = router;
