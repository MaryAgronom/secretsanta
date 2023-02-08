const router = require('express').Router();
const { Adminroom } = require('./controllers/usersController.js');

router.get('/', Adminroom);

module.exports = router;