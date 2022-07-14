import express, {json} from 'express';
import cors from 'cors';
import 'express-async-errors';
import {handleError} from "./utils/errors";
import rateLimit from "express-rate-limit";
import {gardenRouter} from './routers/garden.router';

const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(json());

app.use(rateLimit({
        windowMs: 10 * 60 * 1000,
        max: 100,
    })
);

// app.get('/', async () => {
//     throw new ValidationError('Mamy problem')
// });

app.use('/garden', gardenRouter);

app.use(handleError);

app.listen(3001, '0.0.0.0', () => {
    console.log('lsitening on port http://localhost:3001');
});