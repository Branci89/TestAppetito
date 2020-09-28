import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute } from '@angular/router';
import { Dishes, Piatto } from 'src/app/model/Dishes';
import { DishService } from 'src/app/services/dish.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent  {
  private id= this.route.snapshot.params['id'];;
  public temp: Dishes;
  public piattoList: Piatto[];
  
  

  constructor(db: AngularFireDatabase, private route: ActivatedRoute) {
    db.object<Map<string,Piatto>>('/dishes/'+this.id+'/menu').valueChanges()
    .subscribe(
      retData => {
        this.fillDishes(retData);
      }
    )
  }

  fillDishes(_retData: Map<string,Piatto>) {
  //todo trasformare in Array
  }

}
