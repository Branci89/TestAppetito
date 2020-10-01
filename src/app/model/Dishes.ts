export class Dishes {
    Menu: Map<string,Piatto>;
    Offers: Offerta[];
}

export class Piatto {
    dishID: string;
    available: number;
    dishCategory: string;
    dishId: string;
    dishName: string;
    dishPrice: number;
    dishUri: string;
    preparationTime: number;
    totQnt: number;
    dishFixedIngredients: String[];
}

export class Offerta{
    id:string;
}