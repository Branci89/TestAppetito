import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {

  
  constructor(public authServ: LoginService,public router: Router) { 
    this.authServ.afAuth.auth.onAuthStateChanged(user => {
      if (!user) {
        // non sei loggato!
        this.router.navigate(['/home/']);
      }
})
  }

  
  logout(){
    this.authServ.logout();
    
  }
}