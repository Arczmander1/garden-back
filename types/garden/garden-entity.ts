export interface NewGardenEntity extends Omit <GardenEntity, 'id'> {
    id?: string;
}

export interface SimpleGardenEntity {
    id: string;
}

export interface GardenEntity extends SimpleGardenEntity {
    name: string;
    price: number;
    origin: string;
    capacity: number;
}




