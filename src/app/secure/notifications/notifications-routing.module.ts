import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkdairyComponent } from './workdairy/workdairy.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { AttendenceComponent } from './attendence/attendence.component';
import { ProcurementComponent } from './procurement/procurement.component';
import { EmptransferComponent } from './emptransfer/emptransfer.component';
import { PlantstransferComponent } from './plantstransfer/plantstransfer.component';
import { MaterialtransferComponent } from './materialtransfer/materialtransfer.component';

const routes: Routes = [
  { path: '', component: WorkdairyComponent },
  { path: 'workdairy', component: WorkdairyComponent },
  { path: 'timesheet', component: TimesheetComponent },
  { path: 'attendence', component: AttendenceComponent },
  { path: 'procurement', component: ProcurementComponent },
  { path: 'emptransfer', component: EmptransferComponent },
  { path: 'planttransfer', component: PlantstransferComponent },
  { path: 'materialtransfer', component: MaterialtransferComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationsRoutingModule { }
