import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    ReportsRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [ReportsComponent]
})
export class ReportsModule { }
