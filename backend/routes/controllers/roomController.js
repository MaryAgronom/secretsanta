const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const Room = async (req, res) => {
  const admin_id = req.session.userId;
  console.log(admin_id, 'ADMIN');
  const { title, description } = req.body;
  console.log('req.body', req.body);
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

  console.log('ROOOM', rooms);
  res.json(rooms);
  // res.json({created: true});
};

module.exports = { Room };
