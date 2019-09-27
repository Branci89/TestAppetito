import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import * as firebase from 'firebase';
import { UserComponent } from './components/user/user.component';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCfRW7xAk50TSyBgP_YTfRAXYH4XLxlDSM",
    authDomain: "sweltering-heat-1246.firebaseapp.com",
    databaseURL: "https://sweltering-heat-1246.firebaseio.com",
    projectId: "sweltering-heat-1246",
    storageBucket: "sweltering-heat-1246.appspot.com",
    messagingSenderId: "368382819404",
    appId: "1:368382819404:web:a20b518e571268b99dc8e9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
