import { Component, Input, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { SharedOrder } from 'src/app/model/Order';
import { DishService } from 'src/app/services/dish.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  @Input() order: SharedOrder;
  @Input() id: string;
  
  constructor(public db: AngularFireDatabase, public dishServ: DishService) { }

  deleteOrder(): void {
    this.db.object<Map<string,SharedOrder>>('/orders/'+this.id +"/"+this.order.orderId).remove()
  }

}
