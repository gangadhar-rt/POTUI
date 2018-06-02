import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestApprovalsRoutingModule } from './request-approvals-routing.module';
import { RequestApprovalsComponent } from './request-approvals.component';

@NgModule({
  imports: [
    CommonModule,
    RequestApprovalsRoutingModule
  ],
  declarations: [RequestApprovalsComponent]
})
export class RequestApprovalsModule { }
