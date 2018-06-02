import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { Routes } from '@angular/router';
import { CommonModule } from '@angular/common';


import {
    HeaderComponent, SidebarComponent, MenuService, SettingsService, UserblockService, menu
} from '../shared';


const SecureRoutes: Routes = [
    {
        path: '', component: LayoutComponent, children: [
            { path: '', redirectTo: '/secure/dashboard', pathMatch: 'full' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'tenant', loadChildren: './tenant/tenant.module#TenantModule' },
            { path: 'central', loadChildren: './central-library/central-library.module#CentralLibraryModule' },
            { path: 'eps', loadChildren: './eps/eps.module#EpsModule' },
            { path: 'epstools', loadChildren: './epstools/epstools.module#EpstoolsModule' },
            { path: 'projects', loadChildren: './projects/projects.module#ProjectsModule' },
            { path: 'myaccount', loadChildren: './my-account/my-account.module#MyAccountModule' },
            { path: 'schedule', loadChildren: './schedule/schedule.module#ScheduleModule' },
            { path: 'documents', loadChildren: './documents/documents.module#DocumentsModule' },
            { path: 'resources', loadChildren: './resources/resources.module#ResourcesModule' },
            { path: 'reqapprove', loadChildren: './request-approvals/request-approvals.module#RequestApprovalsModule' },
            { path: 'notifications', loadChildren: './notifications/notifications.module#NotificationsModule' },
            { path: 'reports', loadChildren: './reports/reports.module#ReportsModule' },
        ]
    }
];



@NgModule({
    imports: [
        RouterModule.forChild(SecureRoutes),
        CommonModule
    ],
    declarations: [LayoutComponent, HeaderComponent, SidebarComponent],
    exports: [
        RouterModule
    ],
    providers: [MenuService]
})

export class RoutesModule {
    // constructor() {
    // }
    constructor(public menuService: MenuService) {
        menuService.addMenu(menu);
        // menuService.addUsersMenu(user);
    }
}
