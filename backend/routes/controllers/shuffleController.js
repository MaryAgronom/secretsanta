const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const Shuffle = async (req, res) => {
  //   console.log(req.body);
  const { input, users, id } = req.body;
  // console.log('USERS', input);
  const unsorted = users.map((el) => el.user.id);

  const sorted = [...unsorted];
  const lastName = sorted.pop();
  sorted.unshift(lastName);
  // идет в sender
  // console.log('unsorted====>', unsorted);
  // // идет в receiver
  // console.log('sorted====>', sorted);
  // console.log('id====>', id);

  const senderObj = unsorted.map((el) => ({ sender_id: el }));

  const receiverObj = sorted.map((el) => ({ receiver_id: el }));

  const allObj = console.log('obj------------', senderObj, receiverObj);

  const obj = [];
  for (let i = 0; i < senderObj.length; i++) {
    obj.push({
      send: false,
      received: false,
      sender_id: unsorted[i],
      receiver_id: sorted[i],
      room_id: Number(id),
    });
  }

  // console.log('DATA', obj);

  // const addShuffle = await prisma.present.createMany({
  //   data: obj,
  // });

  // const updateRoom = await prisma.room.update({
  //   where: {
  //     id: Number(id),
  //   },
  //   data: {
  //     money: Number(input.money),
  //     data_closed: new Date(input.data_closed),
  //   },
  // });

  const present = await prisma.present.findMany({
    where: {
      room_id: Number(id),
    },
    select: {
      receiver: {
        select: {
          name: true,
          surname: true,
        },
      },
    },
  });
  res.json(present);
  console.log('THUUUUUUNK===>', present);
};

module.exports = { Shuffle };
