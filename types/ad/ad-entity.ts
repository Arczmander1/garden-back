export interface NewAdEntity extends Omit <AdEntity, 'id'> {
    id?: string;
}

export interface SimpleAdEntity {
    id: string;
}

export interface AdEntity extends SimpleAdEntity {
    name: string;
    price: number;
    origin: string;
    capacity: number;
}
