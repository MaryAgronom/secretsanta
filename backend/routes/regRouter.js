const router = require('express').Router();
const { Registration } = require('./controllers/regController');

router
  .post('/', Registration);

module.exports = router;
