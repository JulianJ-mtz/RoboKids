import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();
 
async function main() {
    const post = await prisma.contact.create({
        data: {
            nombreCompleto: 'Daniela Monsteserrat Ruiz Garcia',
            correo: 'dani@gmail.com',
            numero: '662 298 1499',
            mensaje: 'buenas tarder'
        }
    })
    console.log(post);
}

main();
    // .then(async () => {
    //     await prisma.$disconnect()
    // })
    // .catch(async (e) => {
    //     console.error(e)
    //     await prisma.$disconnect()
    //     process.exit(1)
    // })
