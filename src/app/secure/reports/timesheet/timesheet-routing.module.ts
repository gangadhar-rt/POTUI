import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchrecComponent } from './../timesheet/searchrec/searchrec.component';
import { SubmissionApprovalComponent } from './../timesheet/submission-approval/submission-approval.component';

const routes: Routes = [
  { path: '', redirectTo: 'searchrec' },
  { path: 'searchrec', component: SearchrecComponent },
  { path: 'submissionapproval', component: SubmissionApprovalComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimesheetRoutingModule { }
