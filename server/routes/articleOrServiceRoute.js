const express = require('express');
const newInputModel = require('./articleOrServiceRoute');
const router = express.Router();
const ArticleOrServiceModel = require('../models/newInputModel');

// router test
// router.get('/test/new', (req, res) => {
//   res.json('testing route');
// });
// router.post('/newpoint', (req, res) => {
//   res.json('gaunam nauja forma');
//   console.log(req.body);
// });

router.post('/newpoint', (req, res) => {
  const articleService = new ArticleOrServiceModel(req.body);
  articleService
    .save()
    .then((result) => res.json(result))
    .catch((err) => console.error(err.message));
});

module.exports = router;
