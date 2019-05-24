import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/library/material-module';

import { AideComponent } from './aide/aide.component';
import { AideService } from './aide.service';
import { AideRoutingModule } from './aide-routing.module';

@NgModule({
  declarations: [
    AideComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AideRoutingModule
  ],
  providers:[ AideService ]
})
export class AideModule { }
