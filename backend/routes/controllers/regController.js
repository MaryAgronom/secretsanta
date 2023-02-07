const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt')

const prisma = new PrismaClient();

const Registration = async (req, res) => {
  const {
    name, surname, email, password,
  } = req.body;
  console.log('req.body', req.body);
  const hashed = await bcrypt.hash(password, 10);
  // const regUser = await prisma.user.create({
  //   name, surname, email, password: hashed,
  // });
  const regUser = await prisma.user.create({
    data: {
      name,
      surname,
      email,
      password: hashed,
    },
  });
  console.log('REG', regUser);
  res.json({ created: true });
};

module.exports = { Registration };
