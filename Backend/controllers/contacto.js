import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient

export const contactos = async (req, res) => {
    try {
        const  { correo, nombreCompleto, numero, mensaje, asunto } = req.body;

        const contactos = await prisma.contact.create({
            data: {
                nombreCompleto: String(nombreCompleto),
                correo: String(correo),
                numero: String(numero),
                mensaje: String(mensaje),
                asunto: String(asunto)
            }
        })

        res.json(contactos)
    } catch (error) {
        if (process.env.NODE_ENV !== 'test') {
            console.log('Error! Could not add the entry:', error)
        }
        res.json({ status: 'error', message: 'Hubo un error al mandar la bitacora'})
    }
}