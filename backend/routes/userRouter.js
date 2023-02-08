const router = require('express').Router();
const { checkUser } = require('../middleware/checkUser.js');
const { getUser, addWish } = require('./controllers/userController.js');

// /user
router.get('/', getUser);
router.post('/wish', checkUser, addWish);

module.exports = router;
