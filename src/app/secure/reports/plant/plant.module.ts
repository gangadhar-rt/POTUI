import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from './../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantRoutingModule } from './plant-routing.module';
import { PeriodicalActualhoursComponent } from './periodical-actualhours/periodical-actualhours.component';
import { DatewiseActualhoursComponent } from './datewise-actualhours/datewise-actualhours.component';
import { CocwiseDailydeploymentComponent } from './cocwise-dailydeployment/cocwise-dailydeployment.component';
import { PlantIdlehoursComponent } from './plant-idlehours/plant-idlehours.component';
import { ActualStandardComponent } from './actual-standard/actual-standard.component';
import { CurrentplantlistComponent } from './currentplantlist/currentplantlist.component';

@NgModule({
  imports: [
    CommonModule,
    PlantRoutingModule,
    ReactiveFormsModule,
    FormsModule, SharedModule
  ],
  declarations: [PeriodicalActualhoursComponent, DatewiseActualhoursComponent, CocwiseDailydeploymentComponent, PlantIdlehoursComponent, ActualStandardComponent, CurrentplantlistComponent]
})
export class PlantModule { }
