const router = require('express').Router();
const { Registration, Invite } = require('./controllers/regController');

router
  .post('/', Registration)
  .post('/:link', Invite);

module.exports = router;
