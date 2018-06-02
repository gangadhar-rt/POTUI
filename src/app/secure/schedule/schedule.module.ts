import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleRoutingModule } from './schedule-routing.module';
import { ScheduleComponent } from './schedule.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialComponent } from './material/material.component';
import { ManPowerComponent } from './man-power/man-power.component';
import { PlantEquipmentComponent } from './plant-equipment/plant-equipment.component';
import { ConstBudgetComponent } from './const-budget/const-budget.component';
import { TangibleQuantityComponent } from './tangible-quantity/tangible-quantity.component';
import { SummaryActivityComponent } from './summary-activity/summary-activity.component';
import { SharedModule } from '../../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    ScheduleRoutingModule,
    FormsModule, ReactiveFormsModule, SharedModule
  ],
  declarations: [ScheduleComponent, MaterialComponent, ManPowerComponent, PlantEquipmentComponent, ConstBudgetComponent, TangibleQuantityComponent, SummaryActivityComponent]
})
export class ScheduleModule { }
