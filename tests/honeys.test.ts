import {AdRecord} from "../records/ad.record";
import {pool} from "../utils/db";
import {AdEntity} from "../types";

afterAll(async () => {
    await pool.end();
})

test('AdRecord.getOne returns data from database for one entry.', async() => {

   const honey = await AdRecord.getOne('28b30a41-fea0-11ec-ab25-38f3ab15b56e');

   expect(honey).toBeDefined();
   expect(honey.id).toBe('28b30a41-fea0-11ec-ab25-38f3ab15b56e');
   expect(honey.name).toBe('Miód Rzepakowy');

});

test('AdRecord.getOne returns null from database for unexisting entry.', async () => {

    const honey = await AdRecord.getOne('.')
    expect(honey).toBeNull();

});

test('AdRecord.findAll returns array of all data', async () => {

    const honeys = await AdRecord.findAll('')
    expect(honeys).not.toEqual([]);

});

test('AdRecord.findAll returns array of found data when searching for M', async () => {

    const honeys = await AdRecord.findAll('M')
    expect(honeys).not.toEqual([]);

});

test('AdRecord.findAll returns empty array when searching for something that does not exists', async () => {

    const honeys = await AdRecord.findAll('3fjdsssssdfijsfsfdsdf ,c.sa,/f.s,dfsf-------')
    expect(honeys).toEqual([]);

});

test('AdRecord.findAll returns only id', async () => {

    const honeys = await AdRecord.findAll('')
    expect(honeys[0].id).toBeDefined();
    expect((honeys[0] as AdEntity).price).toBeUndefined()

});