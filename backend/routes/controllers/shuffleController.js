const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const Shuffle = async (req, res) => {
//   console.log(req.body);
   const {input, users} = req.body
   console.log("input=======>", input);
   const unsorted = users.map((el) => el.user.name)
   console.log("users=======>", users.map((el) => el.user.name));
//    const sorted = unsorted

   function shuffle(unsorted) {
    const arr = []
    for (let i = unsorted.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i
  
      // поменять элементы местами
      // мы используем для этого синтаксис "деструктурирующее присваивание"
      // подробнее о нём - в следующих главах
      // то же самое можно записать как:
      // let t = array[i]; array[i] = array[j]; array[j] = t
      [unsorted[i], unsorted[j]] = [unsorted[j], unsorted[i]];
      arr.push(unsorted[i]);
    }
    return arr
  }
  console.log("===========>", shuffle(unsorted))

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
