const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

const Registration = async (req, res) => {
  const {
    name, surname, email, password,
  } = req.body;
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

const Invite = async (req, res) => {
  try {
    console.log('hehe', req.params);
    console.log('heheh', req.body);
    const {
      name, surname, email, password,
    } = req.body;
    const { link } = req.params;
    const isExist = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!isExist) {
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
      console.log('INVITE IN CONTROLLER', regUser);

      const room = await prisma.room.findUnique({
        where: {
          link,
        },
      });
      console.log(room);
      res.json(room);
      const userToRoom = await prisma.userandroom.create({
        data: {
          userId: regUser.id,
          roomId: room.id,
        },
      });
      console.log('userAndRoom', userToRoom);
    } else {
      console.log('Person is exist');
    }
  } catch (e) {
    console.log(e);
  }
};

module.exports = { Registration, Invite };
