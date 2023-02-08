const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getUser = async (req, res) => {
  const userId = req.session?.userId;
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
    res.sendStatus(400);
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
  const userId = req.session.userId;
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

module.exports = { getUser, addWish, deleteWish, updateUser };

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
