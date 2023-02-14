const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getUser = async (req, res) => {
  const userId = req.session?.userId;
  console.log('GET USER');
  if (userId) {
    try {
      const user = await prisma.user.findUnique({
        where: {
          id: userId,
        },
        select: {
          id: true,
          name: true,
          surname: true,
          Wishes: {
            select: {
              id: true,
              item: true,
              like: true,
            },
          },
          userInfo: {
            select: {
              avatar: true,
              address: true,
              size: true,
              allergy: true,
            },
          },
          adminRooms: {
            select: {
              id: true,
              title: true,
              link: true,
              description: true,
              money: true,
              data_closed: true,
              background: true,
              Users: {
                select: {
                  user: {
                    select: {
                      id: true,
                      name: true,
                      surname: true,
                    },
                  },
                },
              },
            },
          },
        },
      });
      res.json(user);
    } catch (err) {
      res.sendStatus(500);
      console.log(err);
    }
  } else {
    console.log(req.params, req.body);
    res.sendStatus(400);
    console.log('No user');
  }
};

const addWish = async (req, res) => {
  const userId = req.session.userId;
  const { item, like } = req.body;
  console.log(req.body);
  try {
    const newWish = await prisma.wish.create({
      data: {
        item,
        like,
        userId,
      },
      select: {
        id: true,
        item: true,
        like: true,
      },
    });
    res.json(newWish);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

const deleteWish = async (req, res) => {
  const userId = req.session?.userId;
  const { id } = req.body;
  try {
    const wishDelete = await prisma.wish.findFirst({
      where: {
        id,
      },
    });
    if (wishDelete.userId === userId) {
      const deletedWish = await prisma.wish.delete({
        where: {
          id: wishDelete.id,
        },
      });
      res.sendStatus(200);
    } else {
      res.sendStatus(400);
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

const updateUser = async (req, res) => {
  const userId = req.session.userId;
  console.log(req.body);
  const { avatar, address, size, allergy } = req.body;
  try {
    const userInfo = await prisma.userInfo.update({
      where: {
        userId,
      },
      data: {
        avatar,
        address,
        size,
        allergy,
      },
    });
    console.log(userInfo);
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

const getPresents = async (req, res) => {
  const userId = req.session.userId;
  try {
    const presents = await prisma.present.findMany({
      where: {
        OR: [
          {
            sender_id: userId,
          },
          {
            receiver_id: userId,
          },
        ],
      },
      select: {
        id: true,
        send: true,
        received: true,
        room: {
          select: {
            id: true,
            title: true,
            description: true,
            money: true,
            data_closed: true,
            background: true,
          },
        },
        receiver: {
          select: {
            id: true,
            name: true,
            surname: true,
            Wishes: {
              select: {
                id: true,
                item: true,
                like: true,
              },
            },
            userInfo: true,
          },
        },
      },
    });
    console.log(presents);
    res.json(presents);
  } catch (err) {
    console.log(err);
  }
};

const sendPresent = async (req, res) => {
  const { presentId } = req.body;
  try {
    await prisma.present.update({
      where: {
        id: presentId,
      },
      data: {
        send: true,
      },
    });
    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(500);
    console.log(err);
  }
};

const receivedPresent = async (req, res) => {
  console.log('received present' ,req.body);
  const { presentId } = req.body;
  try {
    await prisma.present.update({
      where: {
        id: presentId,
      },
      data: {
        received: true,
      },
    });
    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(500);
    console.log(err);
  }
};

module.exports = {
  getUser,
  addWish,
  deleteWish,
  updateUser,
  getPresents,
  sendPresent,
  receivedPresent,
};

// const user = await prisma.user.findUnique({
//   where: {
//     id: userId,
//   },
//   select: {
//     id: true,
//     name: true,
//     surname: true,
//     Wishes: true,
//     Rooms: {
//       select: {
//         room: {
//           where: {
//             admin_id: userId,
//           },
//           select: {
//             id: true,
//             title: true,
//             description: true,
//             money: true,
//             data_closed: true,
//             background: true,
//             admin_id: true,
//           },
//         },
//       },
//     },
//   },
// });
