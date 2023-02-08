const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const FeedBack = async (req, res) => {
const { picture, text } = req.body;
console.log(req.body)
  const rooms = await prisma.room.create({
    data: {
        picture,
        text,
      },
  });
  res.json({
    created: true,
  })
  };
  
  module.exports = { FeedBack };