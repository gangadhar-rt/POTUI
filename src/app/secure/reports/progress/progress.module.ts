import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressRoutingModule } from './progress-routing.module';
import { PeriodicalprogressComponent } from './periodicalprogress/periodicalprogress.component';
import { DatewiseprogressComponent } from './datewiseprogress/datewiseprogress.component';
import { ProgressplanActualComponent } from './progressplan-actual/progressplan-actual.component';
import { PeriodicalProgressclaimComponent } from './periodical-progressclaim/periodical-progressclaim.component';
import { SharedModule } from '../../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ProgressRoutingModule,
    SharedModule, FormsModule, ReactiveFormsModule
  ],
  declarations: [PeriodicalprogressComponent, DatewiseprogressComponent, ProgressplanActualComponent, PeriodicalProgressclaimComponent]
})
export class ProgressModule { }
