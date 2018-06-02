import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DailyDeployCrewwiseComponent } from './daily-deploy-crewwise/daily-deploy-crewwise.component';
import { DailyPlanPresentComponent } from './daily-plan-present/daily-plan-present.component';
import { DailyPlantrecComponent } from './daily-plantrec/daily-plantrec.component';
import { MonthlyEmprecComponent } from './monthly-emprec/monthly-emprec.component';
import { MonthlyPlantrecComponent } from './monthly-plantrec/monthly-plantrec.component';
import { DailyEmprecordsComponent } from './daily-emprecords/daily-emprecords.component';


const routes: Routes = [
  { path: '', redirectTo: './dailyresource', pathMatch: 'full' },
  { path: 'dailyresource', component: DailyDeployCrewwiseComponent },
  { path: 'dailyemprec', component: DailyEmprecordsComponent },
  { path: 'dailyplan', component: DailyPlanPresentComponent },
  { path: 'dailyplantrec', component: DailyPlantrecComponent },
  { path: 'monthlyemprec', component: MonthlyEmprecComponent },
  { path: 'monthlyplantrec', component: MonthlyPlantrecComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendencerecordsRoutingModule { }
