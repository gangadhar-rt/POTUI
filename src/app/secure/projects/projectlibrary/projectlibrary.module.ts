import { SharedModule } from './../../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectlibraryRoutingModule } from './projectlibrary-routing.module';
import { EmployeeComponent } from './employee/employee.component';
import { MaterialtransferRestrictionComponent } from './materialtransfer-restriction/materialtransfer-restriction.component';
import { WarehouseStackyardComponent } from './warehouse-stackyard/warehouse-stackyard.component';
import { PlantClassificationComponent } from './plant-classification/plant-classification.component';
import { WorkingShiftsComponent } from './working-shifts/working-shifts.component';
import { CrewListComponent } from './crew-list/crew-list.component';
import { ScheduleEstimatedComponent } from './schedule-estimated/schedule-estimated.component';
import { ScheduleRatesComponent } from './schedule-rates/schedule-rates.component';
import { CostcodeScheduleComponent } from './costcode-schedule/costcode-schedule.component';
import { ScopeWorksComponent } from './scope-works/scope-works.component';

@NgModule({
  imports: [
    CommonModule,
    ProjectlibraryRoutingModule,
    ReactiveFormsModule,
    FormsModule, SharedModule
  ],
  declarations: [EmployeeComponent, MaterialtransferRestrictionComponent, WarehouseStackyardComponent, PlantClassificationComponent, WorkingShiftsComponent, CrewListComponent, ScheduleEstimatedComponent, ScheduleRatesComponent, CostcodeScheduleComponent, ScopeWorksComponent]
})
export class ProjectlibraryModule { }
