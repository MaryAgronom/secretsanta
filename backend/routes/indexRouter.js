const router = require('express').Router();
const { Main } = require('./controllers/indexController');

router.get('/', Main);

module.exports = router;
