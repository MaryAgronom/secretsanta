const router = require('express').Router();
const { checkUser } = require('../middleware/checkUser.js');
const {
  getUser,
  addWish,
  deleteWish,
  updateUser,
} = require('./controllers/userController.js');

// /user
router.get('/', getUser);
router.put('/', checkUser, updateUser);
router.post('/wish', checkUser, addWish);
router.delete('/wish', checkUser, deleteWish);

module.exports = router;
