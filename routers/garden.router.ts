import {Router} from "express";
import {GardenRecord} from "../records/garden.record";
import {ValidationError} from "../utils/errors";

export const gardenRouter = Router()

    .get('/search/:name?', async (req, res) => {
        const honeys = await GardenRecord.findAll(req.params.name ?? '');
        res.json(honeys);
    })

    .delete ('/:id', async (req, res)=>{
        const honey = await GardenRecord.getOne(req.params.id);

        if(!honey) {
            throw new ValidationError('There is no honey like this.')
        }

        await honey.delete();

        res.end();
    })

    .get('/', async (req, res) => {
        const honeys = await GardenRecord.listAll();
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

