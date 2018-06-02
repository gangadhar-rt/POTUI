import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportsComponent } from './reports.component';

const routes: Routes = [
  { path: '', redirectTo: '/secure/reports/attendencerecords' },
  { path: 'attendencerecords', loadChildren: './attendencerecords/attendencerecords.module#AttendencerecordsModule' },
  { path: 'workdairy', loadChildren: './workdairy/workdairy.module#WorkdairyModule' },
  { path: 'timesheet', loadChildren: './timesheet/timesheet.module#TimesheetModule' },
  { path: 'manpower', loadChildren: './manpower/manpower.module#ManpowerModule' },
  { path: 'plant', loadChildren: './plant/plant.module#PlantModule' },
  { path: 'material', loadChildren: './material/material.module#MaterialModule' },
  { path: 'progress', loadChildren: './progress/progress.module#ProgressModule' },
  { path: 'costperformance', loadChildren: './costperformance/costperformance.module#CostperformanceModule' },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
