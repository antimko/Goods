const express = require('express');
const newInputModel = require('./articleOrServiceRoute');
const router = express.Router();

// router test
router.get('/test', (req, res) => {
  res.json('testing route');
});

module.exports = router;
