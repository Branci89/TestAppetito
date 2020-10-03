export class SharedOrder{
    orderId: string;
    ownerName: string;
    ownerId: string;
    arrivalTime: number;
    allOrder: Map<string,Order>
}

export class Order{
    arrivalTime: number;
    clientId: string;
    clientName: string;
    comment: string;
    diseshMap: Map<string,number>;
    price: number;
}