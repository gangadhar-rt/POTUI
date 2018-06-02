import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { ProjectSettingsComponent } from './project-settings/project-settings.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { GenerateValuesComponent } from './project-settings/generate-values/generate-values.component';
import { ProjectNotesComponent } from './project-notes/project-notes.component';
import { ProjectStatusComponent } from './project-status/project-status.component';
import { ProjectBudgetsComponent } from './project-budgets/project-budgets.component';


@NgModule({

  imports: [
    CommonModule,
    ProjectsRoutingModule,
    FormsModule,
    ReactiveFormsModule, SharedModule
  ],
  declarations: [ProjectsComponent, ProjectSettingsComponent, ProjectListComponent, ProjectBudgetsComponent, ProjectStatusComponent, ProjectNotesComponent, GenerateValuesComponent]
})
export class ProjectsModule { }
