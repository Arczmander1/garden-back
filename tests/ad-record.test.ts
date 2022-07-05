import {AdRecord} from "../records/ad.record";

const defaultObj = {
    name: 'xJakis name',
    price: 9,
    origin: 'adad',
    capacity: 12,
}

test('Can build AdRecord', () => {
    const ad = new AdRecord(defaultObj);

    expect(ad.name).toBe('xJakis name');
    expect(ad.origin).toBe('adad');
    expect(ad.price).toBe(9)
    expect(ad.capacity).toBe(12)
});

test('Can build AdRecord', () => {

    expect(() => new AdRecord({
        ...defaultObj,
        price: 12123,
    })).toThrow('Cena nie może być większa niż 999 zł.')
});

test('Can build AdRecord', () => {

    expect(() => new AdRecord({
        ...defaultObj,
        capacity: 12123,
    })).toThrow('Proszę podać poprawną pojemność produktu, nie może ona przekraczać 99l.')
});

test('Can build AdRecord', () => {

    expect(() => new AdRecord({
        ...defaultObj,
        origin: 'Pochodzenie powinno skladac sie z max 50 znakow, zrobimy żeby było dłuższe niż 50 znaków.',
    })).toThrow('Pochodzenie produktu nie może być puste i musi mieć mniej niż 50 znaków.')
});

test('Can build AdRecord', () => {

    expect(() => new AdRecord({
        ...defaultObj,
        origin: '',
    })).toThrow('Pochodzenie produktu nie może być puste i musi mieć mniej niż 50 znaków.')
});

test('Can build AdRecord', () => {

    expect(() => new AdRecord({
        ...defaultObj,
        name: '',
    })).toThrow('Nazwa produktu nie może być pusta i musi mieć mniej niż 50 znaków.')
});

test('Can build AdRecord', () => {

    expect(() => new AdRecord({
        ...defaultObj,
        name: 'Nazwa powinna się skladac z max 50 znakow, zrobimy żeby było dłuższe niż 50 znaków.',
    })).toThrow('Nazwa produktu nie może być pusta i musi mieć mniej niż 50 znaków.')
});

