import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeriodicalprogressComponent } from './../progress/periodicalprogress/periodicalprogress.component';
import { DatewiseprogressComponent } from './../progress/datewiseprogress/datewiseprogress.component';
import { ProgressplanActualComponent } from './../progress/progressplan-actual/progressplan-actual.component';
import { PeriodicalProgressclaimComponent } from './../progress/periodical-progressclaim/periodical-progressclaim.component';

const routes: Routes = [
  { path: '', redirectTo: 'periodical' },
  { path: 'periodical', component: PeriodicalprogressComponent },
  { path: 'datewise', component: DatewiseprogressComponent },
  { path: 'progressplan', component: ProgressplanActualComponent },
  { path: 'periodicprogress', component: PeriodicalProgressclaimComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgressRoutingModule { }
