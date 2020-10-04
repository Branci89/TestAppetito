import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import "firebase/firestore";
import { LoginService } from './login.service';
import { Piatto } from '../model/Dishes'
import { Observable, of } from 'rxjs';
import { SharedOrder } from '../model/Order';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DishService {


  private dishesList: Map<string, Piatto>;

  constructor(public user: LoginService, public db: AngularFireDatabase, private router: Router) {
    
  }

  public getDishList(uid: string) : Observable<Map<string,Piatto>> {
    
        return this.db.object<Map<string, Piatto>>('/dishes/' + uid + '/menu').valueChanges()

  }

  public deleteOrder(_userId: string, _orderid: string) {
    this.db.object<Map<string,SharedOrder>>('/orders/'+_userId +"/"+_orderid).remove()
  }
}
