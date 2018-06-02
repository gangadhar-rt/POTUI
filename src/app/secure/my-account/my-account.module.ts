import { SharedModule } from './../../shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAccountComponent } from './my-account.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { RoutesModule } from './my-account-routing.module';

@NgModule({
  imports: [
    RoutesModule,
    CommonModule, ReactiveFormsModule, FormsModule, SharedModule
  ],
  declarations: [MyAccountComponent, ChangePasswordComponent]
})
export class MyAccountModule { }
