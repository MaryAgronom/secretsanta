const router = require('express').Router();
const { Cabinet } = require('./controllers/adminCabinetController');

router.get('/:id', Cabinet);

module.exports = router;
