
const express = require('express');
const router = express.Router();

const dateData = require('../data/date');

router.get('/', (req, res) => {
  res.json({ dates: dateData });
});

router.get('/:id', (req, res, next) => {
  const date = dateData.find((date) => date.id === parseInt(req.params.id));

  if (date) {
    res.json(date);
  } else {
    next();
  }
});

module.exports = router;

