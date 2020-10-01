import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Utente } from 'src/app/model/Utente';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

 userProf: Utente;
 id = this.actRout.snapshot.params['id'];
  
 constructor(
   public actRout: ActivatedRoute,
   public afAuth: AngularFireAuth,
   public loginServ: LoginService) { }
   
  ngOnInit(): void {
    this.loginServ.getProfilo(this.id, (data)=>{
      this.userProf = data;
    })
  }

  


}
