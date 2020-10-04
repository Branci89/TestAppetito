import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute, Router } from '@angular/router';
import { Piatto } from 'src/app/model/Dishes';
import { DishService } from 'src/app/services/dish.service';

import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  private id = this.route.snapshot.params['id'];
  public piattoList: Map<string, Piatto>;

  constructor(
    private route: ActivatedRoute,
    private dishServ: DishService) {
  
  }
  ngOnInit(): void {
   this.dishServ.getDishList(this.id)
   .subscribe(dishes => {
     return this.piattoList = dishes;
   });
  }

}
