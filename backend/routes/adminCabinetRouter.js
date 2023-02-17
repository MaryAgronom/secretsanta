const router = require('express').Router();
const { Cabinet, DeleteCabinet, statusController } = require('./controllers/adminCabinetController');

router
  .get('/:link', Cabinet)
  .delete('/:link', DeleteCabinet)
  .get('/status/:link', statusController);

module.exports = router;
