const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

const Login = async (req, res) => {
  const { email, password } = req.body;
  console.log('req.body', req.body);
  const logUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  console.log('REG', logUser);

  const checked = await bcrypt.compare(password, logUser.password);
  if (checked) {
    req.session.userId = logUser.id;
    req.session.save(() => {
      res.json({ logUser, logged: true });
    });
  } else {
    console.log('oshibka');
  }
};

module.exports = { Login };
