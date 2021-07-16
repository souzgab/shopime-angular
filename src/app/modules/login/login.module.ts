import { NgModule } from '@angular/core';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginAreaComponent } from './login-area/login-area.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    LoginComponent,
    LoginAreaComponent
  ],
  imports: [
    LoginRoutingModule,
    SharedModule
  ]
})
export class LoginModule { }
