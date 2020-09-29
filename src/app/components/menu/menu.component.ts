import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute, Router } from '@angular/router';
import { Piatto } from 'src/app/model/Dishes';

import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  private id = this.route.snapshot.params['id'];
  public piattoList: Map<string, Piatto>;

  constructor(db: AngularFireDatabase, private route: ActivatedRoute, public authServ: LoginService, public router: Router) {
    this.authServ.afAuth.auth.onAuthStateChanged(user => {
      if (!user) {
        // non sei loggato!
        this.router.navigate(['/home/']);
      } else {
        db.object<Map<string, Piatto>>('/dishes/' + this.id + '/menu').valueChanges()
          .subscribe(
            retData => {
              this.fillDishes(retData);
            }
          )
      }
    })



  }

  fillDishes(_retData: Map<string, Piatto>) {
    this.piattoList = _retData;
  }

}
