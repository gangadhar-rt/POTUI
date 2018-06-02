import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeTransferComponent } from './employee-transfer/employee-transfer.component';

const routes: Routes = [
  { path: "", redirectTo: "emptrans" },
  { path: "emptrans", component: EmployeeTransferComponent },
  { path: "plantrans", component: EmployeeTransferComponent },
  { path: "materialtrans", component: EmployeeTransferComponent },
  { path: "procurment1", component: EmployeeTransferComponent },
  { path: "procurment2", component: EmployeeTransferComponent },
  { path: "leave", component: EmployeeTransferComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestsRoutingModule { }
