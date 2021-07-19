import { NgxMaskModule, IConfig } from 'ngx-mask';
import { SharedModule } from './../../shared/shared.module';
import { CoreComponent } from './core.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { AdminComponent } from './admin/admin.component';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    CoreComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule,
    NgxMaskModule.forRoot(options)
  ]
})
export class CoreModule { }
