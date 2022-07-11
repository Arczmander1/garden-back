import {GardenRecord} from "../records/garden.record";
import {pool} from "../utils/db";
import {GardenEntity} from "../types";

afterAll(async () => {
    await pool.execute("DELETE FROM `honeys` WHERE `name`= 'x----Jakis name'" , this)
    await pool.end();
})

const defaultObject = {
    name: 'x----Jakis name',
    price: 9,
    origin: 'adad',
    capacity: 12,
};

test('GardenRecord.getOne returns data from database for one entry.', async () => {

    const honey = await GardenRecord.getOne('28b30a41-fea0-11ec-ab25-38f3ab15b56e');

    expect(honey).toBeDefined();
    expect(honey.id).toBe('28b30a41-fea0-11ec-ab25-38f3ab15b56e');
    expect(honey.name).toBe('Miód Rzepakowy');

});

test('GardenRecord.getOne returns null from database for unexisting entry.', async () => {

    const honey = await GardenRecord.getOne('.');
    expect(honey).toBeNull();

});

test('GardenRecord.findAll returns array of all data', async () => {

    const honeys = await GardenRecord.findAll('');
    expect(honeys).not.toEqual([]);

});

test('GardenRecord.findAll returns array of found data when searching for "M".', async () => {

    const honeys = await GardenRecord.findAll('M');
    expect(honeys).not.toEqual([]);

});

test('GardenRecord.findAll returns empty array when searching for something that does not exists', async () => {

    const honeys = await GardenRecord.findAll('3fjdsssssdfijsfsfdsdf ,c.sa,/f.s,dfsf-------');
    expect(honeys).toEqual([]);

});

test('GardenRecord.findAll returns only id', async () => {

    const honeys = await GardenRecord.findAll('');
    expect(honeys[0].id).toBeDefined();
    expect((honeys[0] as GardenEntity).price).toBeUndefined();

});

test('GardenRecord.insert returns UUID.', async () => {

    const honey = new GardenRecord(defaultObject);

    await honey.insert();

    expect(honey.id).toBeDefined();

});

test('GardenRecord.insert inserts honey to honeys.', async () => {

    const honey = new GardenRecord(defaultObject);

    await honey.insert();

    const foundHoney = await GardenRecord.getOne(honey.id);

    expect(foundHoney.id).toBe(honey.id);
});