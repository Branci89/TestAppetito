import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import * as firebase from 'firebase';
import { Utente } from 'src/app/model/Utente';

import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  {

  constructor(public afAuth: AngularFireAuth,public loginServ: LoginService) {  }
  
  login() {
    this.loginServ.login();  
  }
  logout() {
    this.loginServ.logout();
  }

  getProfilo(userId){
    if(this.afAuth.user != null){
      this.loginServ.getProfilo(this.afAuth.auth.currentUser.uid);
    }
  }
}
