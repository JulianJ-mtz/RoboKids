import express from "express";
import contatosRoutes from "./contact_routes.js";

const router = express.Router();

router.use("/contacto", contatosRoutes);

router.all("*", (req, res) => {
    res.status(404).json({
        status: "Not Found",
        payload: null,
    });
});

export default router;
