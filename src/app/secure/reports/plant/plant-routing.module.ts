import { CurrentplantlistComponent } from './../plant/currentplantlist/currentplantlist.component';
import { ActualStandardComponent } from './../plant/actual-standard/actual-standard.component';
import { PlantIdlehoursComponent } from './../plant/plant-idlehours/plant-idlehours.component';
import { CocwiseDailydeploymentComponent } from './../plant/cocwise-dailydeployment/cocwise-dailydeployment.component';
import { DatewiseActualhoursComponent } from './../plant/datewise-actualhours/datewise-actualhours.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeriodicalActualhoursComponent } from './../plant/periodical-actualhours/periodical-actualhours.component';

const routes: Routes = [
  { path: '', redirectTo: 'periodical' },
  { path: 'periodical', component: PeriodicalActualhoursComponent },
  { path: 'datewise', component: DatewiseActualhoursComponent },
  { path: 'cocwise', component: CocwiseDailydeploymentComponent },
  { path: 'plantidle', component: PlantIdlehoursComponent },
  { path: 'actualstandard', component: ActualStandardComponent },
  { path: 'currentplant', component: CurrentplantlistComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlantRoutingModule { }
