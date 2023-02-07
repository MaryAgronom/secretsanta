const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

const Registration = async (req, res) => {
  const { name, surname, email, password } = req.body;
  console.log('req.body', req.body);
  const hashed = await bcrypt.hash(password, 10);
  const regUser = await prisma.user.create({
    include: {
      userInfo: true,
    },
    data: {
      name,
      surname,
      email,
      password: hashed,
      userInfo: {
        create: {},
      },
    },
  });
  console.log('REG', regUser);
  res.json({ created: true });
};

module.exports = { Registration };
