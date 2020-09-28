import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import { UpdateuserComponent } from './components/updateuser/updateuser.component';
import { MenuComponent } from './components/menu/menu.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: LoginComponent },
  { path: 'users/:id', component: UserComponent,
      children: [
        {
          path: 'update',
          component: UpdateuserComponent
        }]

},
{path: 'menu/:id', component: MenuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
