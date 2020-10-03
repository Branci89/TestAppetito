import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { SharedOrder } from 'src/app/model/Order';
import { OrdiniService } from 'src/app/services/ordini.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})

export class OrderListComponent implements OnInit {
  
  public orderList: Map<string,SharedOrder>;
  private id = this.route.snapshot.params['id'];
  
  constructor(
    public ordServ: OrdiniService,
    public db: AngularFireDatabase,
    private route: ActivatedRoute) { 
      
    }

  ngOnInit() {
    this.db.object<Map<string,SharedOrder>>('/orders/'+this.id).valueChanges()
    .subscribe(
      retData => {
       this.orderList = retData;
      }
    )
    
  }

 
   
  
}
