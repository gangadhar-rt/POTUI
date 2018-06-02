import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApprovalsRoutingModule } from './approvals-routing.module';
import { ApprovalsComponent } from './approvals.component';
import { WorkdairyApprComponent } from './workdairy-appr/workdairy-appr.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ApprovalsRoutingModule, FormsModule, ReactiveFormsModule, SharedModule
  ],
  declarations: [ApprovalsComponent, WorkdairyApprComponent]
})
export class ApprovalsModule { }
