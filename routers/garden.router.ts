import {Router} from "express";

export const gardenRouter = Router()
    .get('/', async (req, res) => {
        res.json({
                ok: true,
            }
        )
    })