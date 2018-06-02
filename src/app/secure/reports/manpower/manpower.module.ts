import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';

import { ManpowerRoutingModule } from './manpower-routing.module';
import { PeriodicalActualhoursComponent } from './periodical-actualhours/periodical-actualhours.component';
import { DatewiseActualhoursComponent } from './datewise-actualhours/datewise-actualhours.component';
import { CocDailydeployComponent } from './coc-dailydeploy/coc-dailydeploy.component';
import { ActualStandardhoursComponent } from './actual-standardhours/actual-standardhours.component';
import { IdlehoursrecComponent } from './idlehoursrec/idlehoursrec.component';
import { GenderStatsComponent } from './gender-stats/gender-stats.component';
import { PeriodicalMobilisationComponent } from './periodical-mobilisation/periodical-mobilisation.component';
import { CurrentemplistComponent } from './currentemplist/currentemplist.component';
import { PlanActualEarnedhoursComponent } from './plan-actual-earnedhours/plan-actual-earnedhours.component';

@NgModule({
  imports: [
    CommonModule,
    ManpowerRoutingModule,
    ReactiveFormsModule,
    FormsModule, SharedModule
  ],
  declarations: [PeriodicalActualhoursComponent, DatewiseActualhoursComponent, CocDailydeployComponent, ActualStandardhoursComponent, IdlehoursrecComponent, GenderStatsComponent, PeriodicalMobilisationComponent, CurrentemplistComponent, PlanActualEarnedhoursComponent]
})
export class ManpowerModule { }
