const { PrismaClient } = require('@prisma/client');


const Adminroom = async (req, res) => {
    try {
        const user = await prisma.user.findAll({
            select: {
                name: true,
                surname: true,
            },
        });
       let data = user.json();
     
    } catch (error) {
        let arr = ['masha', 'sahah']
        res.send(arr);
    }

};

module.exports = { Adminroom };