import {GardenRecord} from "../records/garden.record";

const defaultObj = {
    name: 'xJakis name',
    price: 9,
    origin: 'adad',
    capacity: 12,
};

test('Can build GardenRecord', () => {
    const honey = new GardenRecord(defaultObj);

    expect(honey.name).toBe('xJakis name');
    expect(honey.origin).toBe('adad');
    expect(honey.price).toBe(9)
    expect(honey.capacity).toBe(12)
});

test('Can build GardenRecord', () => {

    expect(() => new GardenRecord({
        ...defaultObj,
        price: 12123,
    })).toThrow('Cena nie może być większa niż 999 zł.');
});

test('Can build GardenRecord', () => {

    expect(() => new GardenRecord({
        ...defaultObj,
        capacity: 12123,
    })).toThrow('Proszę podać poprawną pojemność produktu, nie może ona przekraczać 99l.');
});

test('Can build GardenRecord', () => {

    expect(() => new GardenRecord({
        ...defaultObj,
        origin: 'Pochodzenie powinno skladac sie z max 50 znakow, zrobimy żeby było dłuższe niż 50 znaków.',
    })).toThrow('Pochodzenie produktu nie może być puste i musi mieć mniej niż 50 znaków.');
});

test('Can build GardenRecord', () => {

    expect(() => new GardenRecord({
        ...defaultObj,
        origin: '',
    })).toThrow('Pochodzenie produktu nie może być puste i musi mieć mniej niż 50 znaków.')
});

test('Can build GardenRecord', () => {

    expect(() => new GardenRecord({
        ...defaultObj,
        name: '',
    })).toThrow('Nazwa produktu nie może być pusta i musi mieć mniej niż 50 znaków.');
});

test('Can build GardenRecord', () => {

    expect(() => new GardenRecord({
        ...defaultObj,
        name: 'Nazwa powinna się skladac z max 50 znakow, zrobimy żeby było dłuższe niż 50 znaków.',
    })).toThrow('Nazwa produktu nie może być pusta i musi mieć mniej niż 50 znaków.');
});

