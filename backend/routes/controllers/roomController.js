const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const Room = async (req, res) => {
  const admin_id = req.session.userId;
  console.log(admin_id, 'ADMIN');
  const { title, description } = req.body;
  const link = (Math.random() + 1).toString(36).substring(2);
  console.log('ROOOM CONTROLLER', req.body);
  const rooms = await prisma.room.create({
    data: {
      title,
      description,
      admin_id,
      link,
    },
  });
  // const roomId = rooms.id;
  // const userAndRoom = await prisma.userAndRoom.create({
  //   data: {
  //     userId: admin_id,
  //     roomId,
  //   },
  // });
  console.log('ROOOM', rooms);
  res.json(rooms);
};

module.exports = { Room };
