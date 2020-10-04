import { Injectable } from '@angular/core';
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
// Add the Firebase services that you want to use
import  "firebase/auth";
import "firebase/firestore";
import { Utente } from '../model/Utente';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

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

  getProfilo(userId: string): Observable<Utente> {
    return this.db.object<Utente>('/restaurants/' + userId).valueChanges();
  }


  getPorifiloUtente(): Utente {
    return this.profiloUtente;
  }
  

  private fillUtente(_user){
    this.profiloUtente = _user;
  }


}
