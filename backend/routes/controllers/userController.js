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
          Wishes: true,
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
  try {
    const newWish = await prisma.wish.create({
      data: {
        item,
        like,
        user_id: userId,
      },
    });
    res.json(newWish);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

module.exports = { getUser, addWish };

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
