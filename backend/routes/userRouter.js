const router = require('express').Router();
const { checkUser } = require('../middleware/checkUser.js');
const {
  getUser,
  addWish,
  deleteWish,
  updateUser,
  getPresents,
  sendPresent,
  receivedPresent,
} = require('./controllers/userController.js');

// /user
router.get('/', getUser);
router.get('/presents', checkUser, getPresents);
router.put('/presents', checkUser, sendPresent);
router.put('/presents/received', checkUser, receivedPresent);
router.put('/', checkUser, updateUser);
router.post('/wish', checkUser, addWish);
router.delete('/wish', checkUser, deleteWish);

module.exports = router;
