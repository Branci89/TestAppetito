import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import { UpdateuserComponent } from './components/updateuser/updateuser.component';
import { MenuComponent } from './components/menu/menu.component';
import { OrderListComponent } from './components/order-list/order-list.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: LoginComponent },
  {path: 'menu/:id', component: MenuComponent },
  { path: 'users/:id', component: UserComponent,
      children: [
        {
          path: 'update',
          component: UpdateuserComponent
        }]
  },
  {path: 'order/:id', component: OrderListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
