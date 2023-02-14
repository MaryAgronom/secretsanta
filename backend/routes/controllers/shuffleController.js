const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const Shuffle = async (req, res) => {
  //   console.log(req.body);
  const { input, users, link } = req.body;
  console.log('USERS', users);
  console.log(input);

  const room = await prisma.room.findUnique({
    where: {
      link,
    },
  });
  // console.log('ROOM FOR SHUFLE', room);
  
  if (users && !room.isShuffled) {
    const unsorted = users.map((el) => el.user.id);
    // console.log('UNSORTED', unsorted);

    const cloneUnsort = [...unsorted];


    const j = Math.ceil(Math.random() * (unsorted.length - 1));
  const cutArr = unsorted.splice(0, j);
  const sorted = unsorted.concat(cutArr);
  console.log('j', sorted);

    // const sorted = [...unsorted];
    // const lastName = sorted.pop();
    // sorted.unshift(lastName);

    const senderObj = cloneUnsort.map((el) => ({ sender_id: el }));

    const receiverObj = sorted.map((el) => ({ receiver_id: el }));

    // console.log('obj------------', senderObj, receiverObj);

    const room = await prisma.room.findUnique({
      where: {
        link,
      },
    });
    // console.log('ROOM FOR SHUFLE', room);

    const obj = [];
    for (let i = 0; i < senderObj.length; i++) {
      obj.push({
        send: false,
        received: false,
        sender_id: cloneUnsort[i],
        receiver_id: sorted[i],
        room_id: room.id,
      });
    }
    // console.log(obj)
    try {
      const updateRoom = await prisma.room.update({
        where: {
          link,
        },
        data: {
          money: Number(input.money),
          data_closed: new Date(input.data_closed),
          isShuffled: true,
        },
      });
      console.log('with money', updateRoom)
      const createPairs = await prisma.present.createMany({
        data: obj,
      });
      console.log('Pairs gen', createPairs);

      const present = await prisma.present.findMany({
        where: {
          room_id: room.id,
        },
        select: {
          receiver: {
            select: {
              id: true,
              name: true,
              surname: true,
            },
          },
        },
      });
      res.json(present);
      console.log('THUUUUUUNK===>', present);
    } catch (e) {
      res.sendStatus(500);
      console.log(e);
    }
  } else if (room.isShuffled === true) {
    console.log('ShuffleDone');
    const present = await prisma.present.findMany({
      where: {
        room_id: room.id,
      },
      select: {
        receiver: {
          select: {
            id: true,
            name: true,
            surname: true,
          },
        },
      },
    });
    console.log(present);
    res.json(present);
  } else {
    res.sendStatus(400);
  }
};

module.exports = { Shuffle };
