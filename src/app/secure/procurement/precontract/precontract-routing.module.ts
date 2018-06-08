import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrecontractListComponent } from './precontract-list/precontract-list.component';
import { Stg1reqComponent } from './stg1req/stg1req.component';
import { RfqComponent } from './rfq/rfq.component';
import { Stg2reqComponent } from './stg2req/stg2req.component';

const routes: Routes = [
  { path: '', redirectTo: 'precontractlist' },
  { path: 'precontractlist', component: PrecontractListComponent },
  { path: 'stg1req', component: Stg1reqComponent },
  { path: 'rfq', component: RfqComponent },
  { path: 'stg2req', component: Stg2reqComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrecontractRoutingModule { }
