import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAreaComponent } from './login-area/login-area.component';
import { LoginComponent } from './login.component';
import { SignupAreaComponent } from './signup-area/signup-area.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
      {
        path: '',
        component: LoginAreaComponent,
      },
      {
        path: 'signup',
        component: SignupAreaComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
