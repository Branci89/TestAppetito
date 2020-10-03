import { Injectable, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { SharedOrder } from '../model/Order';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class OrdiniService{

  orderList: SharedOrder[];
  constructor(
    public db: AngularFireDatabase,
    public user: LoginService) {
  }
  
   getOrders(id: string, _callback: Function) : SharedOrder[] {
    this.db.object<SharedOrder[]>('/orders/'+id).valueChanges()
    .subscribe(
      retData => {
       this.orderList = retData;
      }
    )

    return this.orderList;
  }

}
