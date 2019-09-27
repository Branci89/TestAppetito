import { Injectable } from '@angular/core';
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from 'firebase';
// Add the Firebase services that you want to use
import  "firebase/auth";
import "firebase/firestore";
import { Utente } from '../model/Utente';
import { AngularFireAuth } from '@angular/fire/auth';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  private user: firebase.User
  constructor(public afAuth: AngularFireAuth) { }

  login() {
    this.afAuth.auth.signInWithEmailAndPassword("cbr_5@hotmail.it","claudio").catch(function error(error){
      alert(error);
    });
}

  logout(){
    this.afAuth.auth.signOut();
  }


}
