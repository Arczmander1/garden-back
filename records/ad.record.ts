import {AdEntity, NewAdEntity} from "../types";
import {ValidationError} from "../utils/errors";
import {FieldPacket} from "mysql2";
import {pool} from "../utils/db";

type AdRecordResults = [AdEntity[], FieldPacket[]];

export class AdRecord implements AdEntity {
    public id: string;
    public name: string;
    public price: number;
    public origin: string;
    public capacity: number;
    constructor(obj: NewAdEntity) {
        if (!obj.name || obj.name.length > 50) {
            throw new ValidationError('Nazwa produktu nie może być pusta i musi mieć mniej niż 50 znaków.')
        }

        if (!obj.origin || obj.origin.length > 50) {
            throw new ValidationError('Pochodzenie produktu nie może być puste i musi mieć mniej niż 50 znaków.')
        }

        if (obj.price > 999) {
            throw new ValidationError('Cena nie może być większa niż 999 zł.')
        }

        if (obj.capacity > 99) {
            throw new ValidationError('Proszę podać poprawną pojemność produktu, nie może ona przekraczać 99l.')
        }

        this.id = obj.id
        this.name = obj.name
        this.origin = obj.origin
        this.price = obj.price
        this.capacity = obj.capacity

    }

    static async getOne(id: string): Promise<AdRecord | null> {
       const [results] = await pool.execute("SELECT * FROM `honeys` WHERE id = :id", {
            id,
        }) as AdRecordResults;


       return results.length === 0 ? null : new AdRecord(results[0]);
    }
}