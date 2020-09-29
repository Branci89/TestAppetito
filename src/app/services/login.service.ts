import { Injectable } from '@angular/core';
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
// Add the Firebase services that you want to use
import  "firebase/auth";
import "firebase/firestore";
import { Utente } from '../model/Utente';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  private profiloUtente: Utente;
  constructor(public afAuth: AngularFireAuth,public db: AngularFireDatabase) { }

  login(_email: string , _pass: string, callback: Function){
    this.afAuth.auth.signInWithEmailAndPassword(_email,_pass)
    .then(
      () =>{
        this.db.object<Utente>('/restaurants/'+this.afAuth.auth.currentUser.uid).valueChanges()
        .subscribe(
          data => { this.fillUtente(data); 
              callback(data);
            },
          error => { callback(error)}
        );
      }
    );
}

  logout(){
    this.afAuth.auth.signOut();
    this.profiloUtente = null;
  }

  getProfilo(userId,_callback: Function) {
    this.db.object<Utente>('/restaurants/'+userId).valueChanges().subscribe(
      data => { 
        this.fillUtente(data);
        _callback(data) ;    
      },
      error => { 
        _callback(error);
        console.log(error) 
   });

  }


  getPorifiloUtente(): Utente {
    return this.profiloUtente;
  }
  

  private fillUtente(_user){
    this.profiloUtente = _user;
  }


}
