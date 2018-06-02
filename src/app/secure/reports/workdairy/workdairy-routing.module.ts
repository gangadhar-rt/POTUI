import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchrecComponent } from '../workdairy/searchrec/searchrec.component';
import { SubmissionApprovalComponent } from '../workdairy/submission-approval/submission-approval.component';

const routes: Routes = [
  { path: '', redirectTo: '/secure/reports/workdairy/searchrec' },
  { path: 'searchrec', component: SearchrecComponent },
  { path: 'submissionapproval', component: SubmissionApprovalComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkdairyRoutingModule { }
