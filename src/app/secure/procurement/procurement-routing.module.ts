import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: 'precontract', loadChildren: './precontract/precontract.module#PrecontractModule' },
  { path: 'purchaseorder', loadChildren: './purchaseorder/purchaseorder.module#PurchaseorderModule' },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcurementRoutingModule { }
