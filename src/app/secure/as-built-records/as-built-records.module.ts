import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsBuiltRecordsRoutingModule } from './as-built-records-routing.module';
import { AsBuiltRecordsComponent } from './as-built-records.component';

@NgModule({
  imports: [
    CommonModule,
    AsBuiltRecordsRoutingModule
  ],
  declarations: [AsBuiltRecordsComponent]
})
export class AsBuiltRecordsModule { }
