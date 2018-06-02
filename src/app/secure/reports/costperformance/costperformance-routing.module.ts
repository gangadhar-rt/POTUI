import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatewiseActualcostComponent } from './datewise-actualcost/datewise-actualcost.component';
import { PeriodicalActualEarnedvalComponent } from './periodical-actual-earnedval/periodical-actual-earnedval.component';
import { DatewiseActualEarnedvalComponent } from './datewise-actual-earnedval/datewise-actual-earnedval.component';
import { CostSchedulevarienceComponent } from './cost-schedulevarience/cost-schedulevarience.component';
import { CostSchedulePerformenceComponent } from './cost-schedule-performence/cost-schedule-performence.component';
import { ItemwiseBudgetProvisionComponent } from './itemwise-budget-provision/itemwise-budget-provision.component';
import { ItemwisePlanActualcostComponent } from './itemwise-plan-actualcost/itemwise-plan-actualcost.component';

const routes: Routes = [
  { path: '', redirectTo: 'Datewiseactual' },
  { path: 'Datewiseactual', component: DatewiseActualcostComponent },
  { path: 'periodicalactual', component: PeriodicalActualEarnedvalComponent },
  { path: 'datewiseearned', component: DatewiseActualEarnedvalComponent },
  { path: 'costschedule', component: CostSchedulevarienceComponent },
  { path: 'costperformence', component: CostSchedulePerformenceComponent },
  { path: 'itemwisebudget', component: ItemwiseBudgetProvisionComponent },
  { path: 'itemwiseplan', component: ItemwisePlanActualcostComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CostperformanceRoutingModule { }
