const router = require('express').Router();
const { Cabinet } = require('./controllers/adminCabinetController');

router.get('/:link', Cabinet);

module.exports = router;
