const router = require('express').Router();
const { FeedBack } = require('./controllers/feedBackController');

router.post('/', FeedBack);

module.exports = router;
