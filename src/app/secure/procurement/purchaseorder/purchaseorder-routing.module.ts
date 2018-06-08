import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurchaseorderComponent } from './purchaseorder.component';

const routes: Routes = [

  // { path: '', redirectTo: 'purchaseorder', pathMatch: 'full' },
  { path: '', component: PurchaseorderComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseorderRoutingModule { }
