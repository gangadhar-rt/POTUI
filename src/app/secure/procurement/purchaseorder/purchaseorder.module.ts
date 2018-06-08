import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseorderRoutingModule } from './purchaseorder-routing.module';
import { PurchaseorderComponent } from './purchaseorder.component';

@NgModule({
  imports: [
    CommonModule,
    PurchaseorderRoutingModule
  ],
  declarations: [PurchaseorderComponent]
})
export class PurchaseorderModule { }
