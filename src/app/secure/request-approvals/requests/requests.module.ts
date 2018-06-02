import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestsRoutingModule } from './requests-routing.module';
import { RequestsComponent } from './requests.component';
import { EmployeeTransferComponent } from './employee-transfer/employee-transfer.component';
import { SharedModule } from '../../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, SharedModule, RequestsRoutingModule, FormsModule, ReactiveFormsModule
  ],
  declarations: [RequestsComponent, EmployeeTransferComponent]
})
export class RequestsModule { }
