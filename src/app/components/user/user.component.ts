import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import * as firebase from 'firebase';
import { Utente } from 'src/app/model/Utente';

import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  {

  item: Observable<any>;
  constructor(public afAuth: AngularFireAuth,public loginServ: LoginService,db: AngularFireDatabase) {
    this.item = db.object('/users/'+this.afAuth.auth.currentUser.uid).valueChanges();
  }
  login() {
    this.loginServ.login();

  }
  logout() {
    this.loginServ.logout();
  }
}
