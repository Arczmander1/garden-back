import {Router} from "express";
import {GardenRecord} from "../records/garden.record";

export const gardenRouter = Router()

    .get('/search/:name?', async (req, res) => {
        const honeys = await GardenRecord.findAll(req.params.name ?? '');
        res.json(honeys);
    })

    .get('/:id', async (req, res) => {
        const honey = await GardenRecord.getOne(req.params.id)
        res.json(honey);
    })

    .post('/', async (req, res) => {
        const honey = new GardenRecord(req.body);
        await honey.insert();
        res.json(honey);
    })
;

