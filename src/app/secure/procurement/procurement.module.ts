import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcurementRoutingModule } from './procurement-routing.module';
import { ProcurementComponent } from './procurement.component';
import { PrecontractComponent } from './precontract/precontract.component';

@NgModule({
  imports: [
    CommonModule,
    ProcurementRoutingModule
  ],
  declarations: []
})
export class ProcurementModule { }
