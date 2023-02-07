const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getUser = async (req, res) => {
  const userId = req.session?.userId;
  if (userId) {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        id: true,
        name: true,
        surname: true,
      },
    });
    res.json(user);
  } else {
    res.sendStatus(400);
  }
};

module.exports = { getUser };
