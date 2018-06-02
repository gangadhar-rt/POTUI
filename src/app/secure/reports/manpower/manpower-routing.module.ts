import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActualStandardhoursComponent } from './../manpower/actual-standardhours/actual-standardhours.component';
import { PeriodicalActualhoursComponent } from './../manpower/periodical-actualhours/periodical-actualhours.component';
import { DatewiseActualhoursComponent } from './datewise-actualhours/datewise-actualhours.component';
import { CocDailydeployComponent } from './../manpower/coc-dailydeploy/coc-dailydeploy.component';
import { IdlehoursrecComponent } from './../manpower/idlehoursrec/idlehoursrec.component';
import { GenderStatsComponent } from './../manpower/gender-stats/gender-stats.component';
import { PeriodicalMobilisationComponent } from './../manpower/periodical-mobilisation/periodical-mobilisation.component';
import { CurrentemplistComponent } from './../manpower/currentemplist/currentemplist.component';
import { PlanActualEarnedhoursComponent } from './../manpower/plan-actual-earnedhours/plan-actual-earnedhours.component';

const routes: Routes = [
  { path: '', redirectTo: 'periodical' },
  { path: 'periodical', component: PeriodicalActualhoursComponent },
  { path: 'datewise', component: DatewiseActualhoursComponent },
  { path: 'cocdaily', component: CocDailydeployComponent },
  { path: 'actualstandard', component: ActualStandardhoursComponent },
  { path: 'idlehours', component: IdlehoursrecComponent },
  { path: 'genderstats', component: GenderStatsComponent },
  { path: 'periodicalmob', component: PeriodicalMobilisationComponent },
  { path: 'currentemp', component: CurrentemplistComponent },
  { path: 'planact', component: PlanActualEarnedhoursComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManpowerRoutingModule { }
