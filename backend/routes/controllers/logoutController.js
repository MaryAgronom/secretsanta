const logoutUser = async (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      res.sendStatus(400);
      console.log(error, 'LOGOUT ERROR');
    }
    res
      .clearCookie('user_sid')
      .sendStatus(200);
    console.log('CLEARED');
  });
};

module.exports = { logoutUser };
