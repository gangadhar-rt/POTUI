import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardsRoutingModule } from './dashboards-routing.module';
import { DashboardsComponent } from './dashboards.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardsRoutingModule
  ],
  declarations: [DashboardsComponent]
})
export class DashboardsModule { }
