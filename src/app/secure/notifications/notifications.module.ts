import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsRoutingModule } from './notifications-routing.module';

import { NotificationsComponent } from './notifications.component';
import { WorkdairyComponent } from './workdairy/workdairy.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { AttendenceComponent } from './attendence/attendence.component';
import { ProcurementComponent } from './procurement/procurement.component';
import { EmptransferComponent } from './emptransfer/emptransfer.component';
import { PlantstransferComponent } from './plantstransfer/plantstransfer.component';
import { MaterialtransferComponent } from './materialtransfer/materialtransfer.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    NotificationsRoutingModule,
    FormsModule,
    ReactiveFormsModule, SharedModule
  ],
  declarations: [NotificationsComponent, WorkdairyComponent, TimesheetComponent, AttendenceComponent, ProcurementComponent, EmptransferComponent, PlantstransferComponent, MaterialtransferComponent]
})
export class NotificationsModule { }
