const { PrismaClient } = require('@prisma/client');

const Adminroom = async (req, res) => {
  try {
    const users = await prisma.user.findAll({
      select: {
        name: true,
        surname: true,
      },
    });
    if (users) {
      res.json(users);
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    res.sendStatus(500);
  }
};

module.exports = { Adminroom };
