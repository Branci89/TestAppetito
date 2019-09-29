import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './login/login.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: LoginComponent },
  { path: 'users/:id', component: UserComponent,
      children: [
        {
          path: 'update',
          component: UpdateuserComponent
        }]

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
