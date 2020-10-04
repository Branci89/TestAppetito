import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { Utente } from 'src/app/model/Utente';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public userProf: Utente;
  
  constructor(
    public authServ: LoginService,
    public router: Router) { }
    
  ngOnInit(): void {
    this.authServ.afAuth.auth.onAuthStateChanged(user => {
      if (!user) {
        // non sei loggato!
        this.router.navigate(['/home/']);
      } else{
          this.authServ.getProfilo(user.uid).subscribe(user =>{
            this.userProf = user;
          });
      }
})
  }

  logout(){
    this.authServ.logout();
    
  }
}
