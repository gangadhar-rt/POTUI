import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CostperformanceRoutingModule } from './costperformance-routing.module';
import { DatewiseActualcostComponent } from './../costperformance/datewise-actualcost/datewise-actualcost.component';
import { PeriodicalActualEarnedvalComponent } from './periodical-actual-earnedval/periodical-actual-earnedval.component';
import { DatewiseActualEarnedvalComponent } from './datewise-actual-earnedval/datewise-actual-earnedval.component';
import { CostSchedulevarienceComponent } from './cost-schedulevarience/cost-schedulevarience.component';
import { CostSchedulePerformenceComponent } from './cost-schedule-performence/cost-schedule-performence.component';
import { ItemwiseBudgetProvisionComponent } from './itemwise-budget-provision/itemwise-budget-provision.component';
import { ItemwisePlanActualcostComponent } from './itemwise-plan-actualcost/itemwise-plan-actualcost.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CostperformanceRoutingModule,
    FormsModule, ReactiveFormsModule, SharedModule
  ],
  declarations: [DatewiseActualcostComponent, PeriodicalActualEarnedvalComponent, DatewiseActualEarnedvalComponent, CostSchedulevarienceComponent, CostSchedulePerformenceComponent, ItemwiseBudgetProvisionComponent, ItemwisePlanActualcostComponent]
})
export class CostperformanceModule { }
