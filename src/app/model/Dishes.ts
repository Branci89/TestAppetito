export class Dishes {
    Menu: Piatto[];
    Offers: Offerta[];
}

export interface Piatto{
    id: string;
}

export interface Offerta{
    id:string;
}