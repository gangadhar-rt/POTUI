import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DocumentsComponent } from './documents.component';
import { FoldersComponent } from './folders/folders.component';
import { DocumentComponent } from './documents/documents.component';

const SecureRoutes: Routes = [
    {
        path: '', component: DocumentsComponent, children: [
            { path: '', redirectTo: 'folders' },
            { path: 'folders', component: FoldersComponent },
            { path: 'documents', component: DocumentComponent },
        ]
    }
];



@NgModule({
    imports: [
        RouterModule.forChild(SecureRoutes),
        CommonModule
    ],
    declarations: [],
    exports: [
        RouterModule
    ],
    providers: []
})

export class RoutesModule {
    constructor() {
    }

}
