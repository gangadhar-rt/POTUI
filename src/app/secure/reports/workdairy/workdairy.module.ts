import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkdairyRoutingModule } from './workdairy-routing.module';
import { SearchrecComponent } from './searchrec/searchrec.component';
import { SubmissionApprovalComponent } from './submission-approval/submission-approval.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { ProjectsPopComponent } from '../../../shared/index';

@NgModule({
  imports: [
    CommonModule,
    WorkdairyRoutingModule,
    ReactiveFormsModule,
    FormsModule, SharedModule
  ],
  declarations: [ProjectsPopComponent, SearchrecComponent, SubmissionApprovalComponent]
})
export class WorkdairyModule { }
