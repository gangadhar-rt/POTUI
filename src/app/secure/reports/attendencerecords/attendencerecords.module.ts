import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttendencerecordsRoutingModule } from './attendencerecords-routing.module';
import { DailyPlanPresentComponent } from './daily-plan-present/daily-plan-present.component';
import { DailyEmprecordsComponent } from './daily-emprecords/daily-emprecords.component';
import { DailyDeployCrewwiseComponent } from './daily-deploy-crewwise/daily-deploy-crewwise.component';
import { DailyPlantrecComponent } from './daily-plantrec/daily-plantrec.component';
import { MonthlyEmprecComponent } from './monthly-emprec/monthly-emprec.component';
import { MonthlyPlantrecComponent } from './monthly-plantrec/monthly-plantrec.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { ProjectsPopComponent } from '../../../shared';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AttendencerecordsRoutingModule, SharedModule
  ],
  declarations: [DailyPlanPresentComponent, DailyEmprecordsComponent, DailyDeployCrewwiseComponent, DailyPlantrecComponent, MonthlyEmprecComponent, MonthlyPlantrecComponent]
})
export class AttendencerecordsModule { }
