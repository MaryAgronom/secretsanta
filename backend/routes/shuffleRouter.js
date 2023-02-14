const router = require('express').Router();
const { Shuffle, takeReceiver } = require('./controllers/shuffleController');

router.post('/', Shuffle);
router.get('/:link', takeReceiver);

module.exports = router;
