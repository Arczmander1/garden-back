import {AdRecord} from "../records/ad.record";

test('AdRecord returns data from database for one entry.', async() => {

   const honey = await AdRecord.getOne('28b30a41-fea0-11ec-ab25-38f3ab15b56e');

   expect(honey).toBeDefined();
   expect(honey.id).toBe('28b30a41-fea0-11ec-ab25-38f3ab15b56e');
   expect(honey.name).toBe('Miód Rzepakowy');

});

test('Ad record returns null from database for unexisting entry.', async () => {

    const honey = await AdRecord.getOne('.')

    expect(honey).toBeNull();

});