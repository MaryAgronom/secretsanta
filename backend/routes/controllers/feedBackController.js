const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const FeedBack = async (req, res) => {
const { present_id, text } = req.body;
console.log(req.body)
  const feedback = await prisma.feedback.create({
    data: {
        text,
        present_id
      },
  });
  res.json({
    created: true,
  })
  };
  
  module.exports = { FeedBack };