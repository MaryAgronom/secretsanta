const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const Cabinet = async (req, res) => {
  const { id } = req.params;
  console.log(Number(id));
  const room = await prisma.room.findUnique({
    where: {
      id: Number(id),
    },
    select: {
      title: true,
      description: true,
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
  console.log(room);
};

module.exports = { Cabinet };
