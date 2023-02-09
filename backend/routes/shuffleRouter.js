const router = require('express').Router();
const { Shuffle } = require('./controllers/shuffleController');

router.post('/', Shuffle);

module.exports = router;
