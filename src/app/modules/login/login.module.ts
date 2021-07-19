import { NgModule } from '@angular/core';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginAreaComponent } from './login-area/login-area.component';
import { SharedModule } from '../../shared/shared.module';
import { SignupAreaComponent } from './signup-area/signup-area.component';

import { NgxMaskModule, IConfig } from 'ngx-mask'

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    LoginComponent,
    LoginAreaComponent,
    SignupAreaComponent
  ],
  imports: [
    LoginRoutingModule,
    SharedModule,
    NgxMaskModule.forRoot(options)
  ]
})
export class LoginModule { }
