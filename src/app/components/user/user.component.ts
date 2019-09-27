import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import * as firebase from 'firebase';
import { Utente } from 'src/app/model/Utente';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  {
  

  user: Utente
  logObj: firebase.User;
  constructor(public loginService: LoginService){}
  
  login(){
    this.logObj = this.loginService.login();
  }

  logoff(){
    this.loginService.logout();
    this.user = null;
  }

}
