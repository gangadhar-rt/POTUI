import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimesheetRoutingModule } from './timesheet-routing.module';
import { SubmissionApprovalComponent } from './submission-approval/submission-approval.component';
import { SearchrecComponent } from './searchrec/searchrec.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    TimesheetRoutingModule,
    ReactiveFormsModule,
    FormsModule, SharedModule
  ],
  declarations: [SubmissionApprovalComponent, SearchrecComponent]
})
export class TimesheetModule { }
