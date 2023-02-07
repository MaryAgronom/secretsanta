const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const Room = async (req, res) => {
const { title, description } = req.body;
console.log(req.body)
  const rooms = await prisma.room.create({
    data: {
        title,
        description,
      },
  });
  res.json({
    created: true,
  })
  };
  
  module.exports = { Room };