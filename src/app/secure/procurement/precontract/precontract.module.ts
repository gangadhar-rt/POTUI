import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PrecontractRoutingModule } from './precontract-routing.module';
import { PrecontractListComponent } from './precontract-list/precontract-list.component';
import { PrecontractComponent } from './precontract.component';
import { Stg1reqComponent } from './stg1req/stg1req.component';
import { Stg2reqComponent } from './stg2req/stg2req.component';
import { RfqComponent } from './rfq/rfq.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PrecontractRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [PrecontractListComponent, PrecontractComponent, Stg1reqComponent,
    Stg2reqComponent, RfqComponent]

})
export class PrecontractModule { }
