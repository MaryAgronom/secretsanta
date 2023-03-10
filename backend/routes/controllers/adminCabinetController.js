const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const Cabinet = async (req, res) => {
  console.log('INSIDE CONTROLLER ADM CABINET');
  const { link } = req.params;
  console.log('PARAMS IN CABINET', req.params);
  // console.log('ADMIN CABINET ID', Number(id));
  if (link) {
    console.log('LINK ON BACK EXIST');
    try {
      console.log('BEGIN OF TRY ADM CABINET CONTROLLER');
      const room = await prisma.room.findUnique({
        where: {
          link,
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
      console.log('CABINET ON BACK', room);
      res.json(room);
      // console.log('ADMIN CABINET', room);
    } catch (e) {
      console.log('ADMINCABINETERRRR', e);
    }
  } else {
    console.log('ADMINCABINET STATUS 400');
    res.sendStatus(400);
  }
};

const DeleteCabinet = async (req, res) => {
  console.log('STArT DELETE');
  try {
    const { link } = req.params;
    console.log('PARAMS IN CABINET', req.params);

    const findRoom = await prisma.room.findUnique({
      where: {
        link,
      },
    });
    const userAndRoom = await prisma.UserAndRoom.deleteMany({
      where: {
        roomId: findRoom.id,
      },
    });
    console.log('userAndRoom', userAndRoom);

    const room = await prisma.room.delete({
      where: {
        link,
      },
    });
    console.log('ROOM TO DELETE', room);
    res.json({ findRoom, deleted: true });
  } catch (e) {
    console.log(e);
  }
};

const statusController = async (req, res) => {
  console.log('STATUS', req.params);
  const { link } = req.params;
  try {
    const room = await prisma.room.findUnique({
      where: {
        link,
      },
    });
    const finder = await prisma.present.findMany({
      where: {
        room_id: room.id,
      },
      select: {
        send: true,
        received: true,
        receiver: {
          select: {
            name: true,
            surname: true,
          },
        },
      
      
        sender: {
          select: {
            name: true,
            surname: true,
          }
        }
      }

    });
    console.log(finder);
    res.json(finder);
  } catch (e) {
    console.log(e);
  }
};

module.exports = { Cabinet, DeleteCabinet, statusController };
