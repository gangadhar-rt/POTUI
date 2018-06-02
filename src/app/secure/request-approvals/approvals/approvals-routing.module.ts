import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkdairyApprComponent } from './workdairy-appr/workdairy-appr.component';

const routes: Routes = [
  { path: '', redirectTo: 'workdairy' },
  { path: 'workdairy', component: WorkdairyApprComponent },
  // {path:'timesheet',component:},
  // {path:'emptrans',component:},
  // {path:'plantrans',component:},
  // {path:'materialtrans',component:},
  // {path:'procurment1',component:},
  // {path:'procurment2',component:},
  // {path:'leave',component:}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApprovalsRoutingModule { }
