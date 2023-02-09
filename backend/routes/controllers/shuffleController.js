const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const Shuffle = async (req, res) => {
  //   console.log(req.body);
  const { input, users, id } = req.body;
  const unsorted = users.map((el) => el.user.id);

  const sorted = [...unsorted];
  const lastName = sorted.pop();
  sorted.unshift(lastName);
  // идет в sender
  console.log('unsorted====>', unsorted);
  // идет в receiver
  console.log('sorted====>', sorted);
  console.log('id====>', id);

  const senderObj = unsorted.map((el) => ({ sender_id: el }));

  const receiverObj = sorted.map((el) => ({ receiver_id: el }));

  const allObj = console.log('obj------------', senderObj, receiverObj);

  // function mapper() {
  //   const commonObj = [];
  //   for (let i = 0; i < sorted.length; i++) {
  //     commonObj = { receiverObj[i], senderObj[i] };
  //   }
  //   return commonObj;
  // }

  // console.log(mapper());
  // const imgFromDB = arrayofimg?.map(
  //     ((img, i) => Work_Photo.create({
  //       user_id,
  //       img: arrayofimg[i].path.replace('public', ''),
  //     })),

  //   );

  // const addShuffle = await prisma.present.createMany({
  //     data: obj

  //     // data: {
  //     //     sender_id: unsorted[0],
  //     //     receiver_id: sorted[0],
  //     //     send: false,
  //     //     received: false,
  //     //     room_id: Number(id)
  //     //     }
  // })

  // res.json(addShuffle)

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
  //   console.log(room);
};

module.exports = { Shuffle };
