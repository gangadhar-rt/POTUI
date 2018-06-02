import { ProjectSettingsComponent } from './project-settings/project-settings.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectNotesComponent } from './project-notes/project-notes.component';
import { ProjectStatusComponent } from './project-status/project-status.component';
import { ProjectBudgetsComponent } from './project-budgets/project-budgets.component';
const routes: Routes = [
  { path: '', component: ProjectListComponent },
  { path: 'project-library', loadChildren: './projectlibrary/Projectlibrary.module#ProjectlibraryModule' },
  { path: 'project-settings', component: ProjectSettingsComponent },
  { path: 'project-notes', component: ProjectNotesComponent },
  { path: 'project-status', component: ProjectStatusComponent },
  { path: 'project-budget', component: ProjectBudgetsComponent }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
