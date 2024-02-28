const express = require('express');
const router = express.Router();

const posts = require('../data/usage');
const error = require('../utilities/error');

router
  .route('/')
  .get((req, res) => {
    const links = [
      {
        href: 'usage/:id',
        rel: ':id',
        type: 'GET',
      },
    ];

    res.json({ usage, links });
  })
  .post((req, res, next) => {
    if (req.body.userId && req.body.date && req.body.coloriesBurned && req.body.workoutDuration) {
      const usages = {
        id: usage[usage.length - 1].id + 1,
        userId: req.body.userId,
        date: req.body.date,
        coloriesBurned: req.body.coloriesBurned,
        workoutDuration: req.body.workoutDuration,
      };

      usage.push(usages);
      res.json(usage[usage.length - 1]);
    } else next(error(400, 'Data Not Enough'));
  });

router
  .route('/:id')
  .get((req, res, next) => {
    const usages = usage.find((p) => p.id == req.params.id);

    const links = [
      {
        href: `/${req.params.id}`,
        rel: '',
        type: 'PATCH',
      },
      {
        href: `/${req.params.id}`,
        rel: '',
        type: 'DELETE',
      },
    ];

    if (usages) res.json({ usage, links });
    else next();
  })
  .patch((req, res, next) => {
    const usages = usage.find((p, i) => {
      if (p.id == req.params.id) {
        for (const key in req.body) {
          usage[i][key] = req.body[key];
        }
        return true;
      }
    });

    if (usages) res.json(usage);
    else next();
  })
  .delete((req, res, next) => {
    const usages = usage.find((p, i) => {
      if (p.id == req.params.id) {
        usage.splice(i, 1);
        return true;
      }
    });

    if (usages) res.json(usage);
    else next();
  });

module.exports = router;

