import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { Utente } from '../model/Utente';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: LoginService,
      
  ) {
      // redirect to home if already logged in
      if (this.authenticationService.afAuth.auth.currentUser != null) { 
        this.router.navigate(['/users/'+this.authenticationService.afAuth.auth.currentUser.uid]);
      }
  }

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
      });

      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }

      
      this.authenticationService.login(this.f.username.value, this.f.password.value, (data)=>{
        
        if(this.authenticationService.afAuth.user != null){
          
        let tmp = new Utente();
        tmp = data;
        this.router.navigate(['/users/'+tmp.id]);
        }
        else(alert(data))
      });
      
      }      
  }


