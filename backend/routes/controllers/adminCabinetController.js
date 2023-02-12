const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const Cabinet = async (req, res) => {
  const { link } = req.params;
  console.log('PARAMS IN CABINET', req.params);
  // console.log('ADMIN CABINET ID', Number(id));
  if (link) {
    try {
      const room = await prisma.room.findFirst({
        where: {
          link: link,
        },
        select: {
          title: true,
          description: true,
          isShuffled: true,
          id: true,
          Users: {
            select: {
              user: {
                select: {
                  name: true,
                  surname: true,
                  email: true,
                  id: true,
                },
              },
            },
          },
        },
      });
      res.json(room);
      console.log('ADMIN CABINET', room);
    } catch (e) {
      console.log('ADMINCABINETERRRR', e);
    }
  } else {
    res.sendStatus(400);
  }
};

module.exports = { Cabinet };
