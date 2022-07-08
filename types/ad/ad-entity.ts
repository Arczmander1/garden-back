export interface AdEntity {
    id: string;
    name: string;
    price: number;
    origin: string;
    capacity: number;
}

export interface NewAdEntity extends Omit <AdEntity, 'id'> {
    id?: string;
}