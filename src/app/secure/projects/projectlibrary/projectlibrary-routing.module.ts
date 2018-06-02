import { CostcodeScheduleComponent } from './costcode-schedule/costcode-schedule.component';
import { WorkingShiftsComponent } from './working-shifts/working-shifts.component';
import { MaterialtransferRestrictionComponent } from './materialtransfer-restriction/materialtransfer-restriction.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { WarehouseStackyardComponent } from './warehouse-stackyard/warehouse-stackyard.component';
import { PlantClassificationComponent } from './plant-classification/plant-classification.component';
import { CrewListComponent } from './crew-list/crew-list.component';
import { ScheduleEstimatedComponent } from './schedule-estimated/schedule-estimated.component';
import { ScheduleRatesComponent } from './schedule-rates/schedule-rates.component';
import { ScopeWorksComponent } from './scope-works/scope-works.component';


const routes: Routes = [
  { path: '', redirectTo: 'employee' },
  { path: 'employee', component: EmployeeComponent },
  { path: 'material', component: MaterialtransferRestrictionComponent },
  { path: 'warehouse', component: WarehouseStackyardComponent },
  { path: 'plant', component: PlantClassificationComponent },
  { path: 'workshifts', component: WorkingShiftsComponent },
  { path: 'crewlist', component: CrewListComponent },
  { path: 'schedule', component: ScheduleEstimatedComponent },
  { path: 'schedule-rates', component: ScheduleRatesComponent },
  { path: 'costcode-schedule', component: CostcodeScheduleComponent },
  { path: 'scope-works', component: ScopeWorksComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectlibraryRoutingModule { }
