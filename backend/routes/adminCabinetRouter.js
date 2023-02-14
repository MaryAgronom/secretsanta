const router = require('express').Router();
const { Cabinet, DeleteCabinet } = require('./controllers/adminCabinetController');

router
  .get('/:link', Cabinet)
  .delete('/:link', DeleteCabinet);

module.exports = router;
