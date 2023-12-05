import express from 'express'
import { contactos } from '../controllers/contacto.js';


const router = express.Router()

router.use("/contacto", contactos)

router.all('*', (req, res) => {
	res.status(404).json({
		status: "Not Found",
		payload: null
	})
});

export default router