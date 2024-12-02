const express = require('express');
const { generateData } = require('../controllers/dataController');

const router = express.Router();

router.post('/generate', generateData);

module.exports = router;
