import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: "requests" },
  { path: "requests", loadChildren: "./requests/requests.module#RequestsModule" },
  { path: "approvals", loadChildren: "./approvals/approvals.module#ApprovalsModule" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestApprovalsRoutingModule { }
