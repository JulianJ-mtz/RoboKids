import express from "express";
import { getContactos, postContactos } from "../controllers/contacto.js";

const router = express.Router();

router.post("/post", postContactos);
router.get("/get", getContactos);

export default router;
