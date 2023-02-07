const router = require('express').Router();
const { Room } = require('./controllers/roomController');

router.post('/', Room);

module.exports = router;
