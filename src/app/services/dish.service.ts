import { Injectable, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import "firebase/firestore";
import { LoginService } from './login.service';
import { Dishes, Piatto } from '../model/Dishes'

@Injectable({
  providedIn: 'root'
})
export class DishService implements OnInit{


  private dishesList: Map<string, Piatto>;

  constructor(public user: LoginService, public db: AngularFireDatabase) {
    
  }
  ngOnInit(): void {
    this.user.afAuth.auth.onAuthStateChanged(user => {
      if (!user) {
        // non sei loggato!
        //this.router.navigate(['/home/']);
      } else {
        this.db.object<Map<string, Piatto>>('/dishes/' + user.uid + '/menu').valueChanges()
          .subscribe(
            retData => {
              this.dishesList = retData;
            }
          )
      }

    });
  }


  fillDishes(_retData: Dishes[]) {
    //this.dishesList = _retData;
  }

  public getDishName(_dishId: string): string {
    return this.dishesList.get(_dishId).dishName;
  }
}
