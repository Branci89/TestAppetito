export class SharedOrder{
    orderId: string;
    ownerName: string;
    ownerId: string;
    arrivalTime: number;
    allOrders: Map<string,Order>
}

export class Order{
    arrivalTime: number;
    clientId: string;
    clientName: string;
    comment: string;
    dishesMap: Map<string,number>;
    menuMap: Map<string,number>;
    price: number;
}