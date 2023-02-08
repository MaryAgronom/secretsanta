const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const Room = async (req, res) => {
  const admin_id = req.session.userId;
  console.log(admin_id, 'ADMIN');
  const { title, description } = req.body;
  console.log(req.body);
  const rooms = await prisma.room.create({
    data: {
      title,
      description,
      admin_id,
    },
  });
  const roomId = rooms.id;
  const userAndRoom = await prisma.userAndRoom.create({
    data: {
      userId: admin_id,
      roomId,
    },
  });
  console.log('ROOOM', userAndRoom);
  res.json({
    created: true,
  });
};

module.exports = { Room };
