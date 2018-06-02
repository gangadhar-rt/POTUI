import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialRoutingModule } from './material-routing.module';
import { DeliverySupplydetComponent } from './delivery-supplydet/delivery-supplydet.component';
import { DailyissuerecComponent } from './dailyissuerec/dailyissuerec.component';
import { StorestackbalanceComponent } from './storestackbalance/storestackbalance.component';
import { StockpilesStockbalComponent } from './stockpiles-stockbal/stockpiles-stockbal.component';
import { PeriodicalconsumptionComponent } from './periodicalconsumption/periodicalconsumption.component';
import { DatewiseconsumptionComponent } from './datewiseconsumption/datewiseconsumption.component';
import { InventoryrecComponent } from './inventoryrec/inventoryrec.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialRoutingModule,
    ReactiveFormsModule,
    FormsModule, SharedModule
  ],
  declarations: [DeliverySupplydetComponent, DailyissuerecComponent, StorestackbalanceComponent, StockpilesStockbalComponent, PeriodicalconsumptionComponent, DatewiseconsumptionComponent, InventoryrecComponent]
})
export class MaterialModule { }
