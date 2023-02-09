const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const Shuffle = async (req, res) => {
  console.log(req.body);


//   const room = await prisma.room.findUnique({
//     where: {
//       id: Number(id),
//     },
//     select: {
//       title: true,
//       description: true,
//       Users: {
//         select: {
//           user: {
//             select: {
//               name: true,
//               surname: true,
//               email: true,
//             },
//           },
//         },
//       },
//     },

//   });
  res.json({created: true});
//   console.log(room);
};

module.exports = { Shuffle };
