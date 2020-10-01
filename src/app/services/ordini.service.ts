import { Injectable, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Order } from '../model/Order';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class OrdiniService{

  orderList: any
  constructor(
    public db: AngularFireDatabase,
    public user: LoginService) {
  }
  
   getOrders(id: string) : Order[] {
    this.db.object<Order[]>('/orders'+id).valueChanges()
    .subscribe(
      retData => {
       
      }
    )

    return null;
  }

}
