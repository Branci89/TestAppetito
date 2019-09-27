import { Injectable } from '@angular/core';
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from 'firebase';
// Add the Firebase services that you want to use
import  "firebase/auth";
import "firebase/firestore";
import { Utente } from '../model/Utente';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  private user: firebase.User
  constructor() { }

  login(): firebase.User {
   firebase.auth().signInWithEmailAndPassword("cbr_5@hotmail.it","claudio").catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // [START_EXCLUDE]
    if (errorCode === 'auth/wrong-password') {
      alert('Wrong password.');
    } else {
      alert(errorMessage);
    }
    console.log(error);
        
  });
  return firebase.auth().currentUser;
}

  logout(){
    firebase.auth().signOut();
  }


}
