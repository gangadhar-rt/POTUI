import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

import { EmployeeComponent } from './employee/employee.component';
import { FixedAssetsComponent } from './fixed-assets/fixed-assets.component';
import { MaterialsComponent } from './materials/materials.component';
import { PlantequipComponent } from './plantequip/plantequip.component';
const routes: Routes = [
  { path: '', redirectTo: 'employee' },
  { path: 'employee', component: EmployeeComponent },
  { path: 'plantequip', component: PlantequipComponent },
  { path: 'material', component: MaterialsComponent },
  { path: 'fixedasset', component: FixedAssetsComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class ResourcesRoutingModule { }
