import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MyAccountComponent } from './my-account.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
const MyaccountRoutes: Routes = [
    {
        path: '', component: MyAccountComponent, children: [
            { path: '', redirectTo: 'changepassword' },
            { path: 'changepassword', component: ChangePasswordComponent },

        ]
    }
];



@NgModule({
    imports: [
        RouterModule.forChild(MyaccountRoutes),
        CommonModule
    ],
    declarations: [],
    exports: [
        RouterModule
    ],
})

export class RoutesModule {
    // constructor() {
    // }

}
