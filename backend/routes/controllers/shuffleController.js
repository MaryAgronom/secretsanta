const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const Shuffle = async (req, res) => {
  //   console.log(req.body);
  const { input, users, id } = req.body;
  console.log(users);
  console.log('b4 if in shuffle controler');
  // console.log('USERS', input);
  if (users) {
    const unsorted = users.map((el) => el.user.id);

    const sorted = [...unsorted];
    const lastName = sorted.pop();
    sorted.unshift(lastName);

    const senderObj = unsorted.map((el) => ({ sender_id: el }));

    const receiverObj = sorted.map((el) => ({ receiver_id: el }));

    console.log('obj------------', senderObj, receiverObj);

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
    try {
      const updateRoom = await prisma.room.update({
        where: {
          id: Number(id),
        },
        data: {
        // money: Number(input.money),
        // data_closed: new Date(input.data_closed),
          isShuffled: true,
        },
      });

      const present = await prisma.present.findMany({
        where: {
          room_id: Number(id),
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
  } else {
    res.sendStatus(400);
  }

};

module.exports = { Shuffle };
