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

  // login with session
  const logUser = await prisma.user.findUnique({
    where: {
      email: regUser.email,
    },
  });

  const checked = await bcrypt.compare(password, logUser.password);
  if (checked) {
    req.session.userId = logUser.id;
    // req.session.save(() => {
    //   res.json({ logUser, logged: true });
    // });
    req.session.save();
  } else {
    console.log('oshibka');
  }

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

      // create new user
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

      // find room to create entry in DB
      const room = await prisma.room.findUnique({
        where: {
          link,
        },
      });
      console.log(room);
      // res.json(room);

      // create entry to connect user and room
      const userToRoom = await prisma.UserAndRoom.create({
        data: {
          userId: regUser.id,
          roomId: room.id,
        },
      });
      console.log('userAndRoom', userToRoom);

      // login with session
      const logUser = await prisma.user.findUnique({
        where: {
          email: regUser.email,
        },
      });

      console.log('REG', logUser);

      const checked = await bcrypt.compare(password, logUser.password);
      if (checked) {
        req.session.userId = logUser.id;
        // req.session.save(() => {
        //   res.json({ logUser, logged: true });
        // });
        req.session.save();
      } else {
        console.log('oshibka');
      }
    } else {
      console.log('Person is exist');
    }
    res.json({ created: true });
  } catch (e) {
    console.log('Invite reg', e);
  }
};

module.exports = { Registration, Invite };
