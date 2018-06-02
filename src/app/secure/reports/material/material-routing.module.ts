import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeliverySupplydetComponent } from './../material/delivery-supplydet/delivery-supplydet.component';
import { DailyissuerecComponent } from './../material/dailyissuerec/dailyissuerec.component';
import { DatewiseconsumptionComponent } from './../material/datewiseconsumption/datewiseconsumption.component';
import { InventoryrecComponent } from './../material/inventoryrec/inventoryrec.component';
import { PeriodicalconsumptionComponent } from './../material/periodicalconsumption/periodicalconsumption.component';
import { StockpilesStockbalComponent } from './../material/stockpiles-stockbal/stockpiles-stockbal.component';
import { StorestackbalanceComponent } from './../material/storestackbalance/storestackbalance.component';

const routes: Routes = [
  { path: '', redirectTo: 'deliverysupply' },
  { path: 'deliverysupply', component: DeliverySupplydetComponent },
  { path: 'dailyissue', component: DailyissuerecComponent },
  { path: 'datewise', component: DatewiseconsumptionComponent },
  { path: 'inventoryrec', component: InventoryrecComponent },
  { path: 'periodicalcons', component: PeriodicalconsumptionComponent },
  { path: 'stockpiles', component: StockpilesStockbalComponent },
  { path: 'storestack', component: StorestackbalanceComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialRoutingModule { }
