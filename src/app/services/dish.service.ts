import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import "firebase/firestore";
import { LoginService } from './login.service';
import {Dishes} from '../model/Dishes'

@Injectable({
  providedIn: 'root'
})
export class DishService {

  private user: firebase.User;
  private DishesList: Dishes[];
  
  constructor(user: LoginService,public db: AngularFireDatabase) {
    this.db.object<Dishes[]>('/dishes'+user.getPorifiloUtente().id).valueChanges()
    .subscribe(
      retData => {
        this.fillDishes(retData);
      }
    )
  }
  fillDishes(_retData: Dishes[]) {
    this.DishesList = _retData;
  }

}
