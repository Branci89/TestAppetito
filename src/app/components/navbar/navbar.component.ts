import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public userProf: any;
  
  constructor(
    public authServ: LoginService,
    public router: Router) { }
    
  ngOnInit(): void {
    this.authServ.afAuth.auth.onAuthStateChanged(user => {
      if (!user) {
        // non sei loggato!
        this.router.navigate(['/home/']);
      } else{
          this.authServ.getProfilo(user.uid, (data)=>{
            this.userProf = data;
          })
      }
})
  }

  logout(){
    this.authServ.logout();
    
  }
}
