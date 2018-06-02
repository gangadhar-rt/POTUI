import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMessagesComponent, FormsValidationService, ProjectsPopComponent } from './';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxMyDatePickerModule } from 'ngx-mydatepicker';
import { StatusPipe } from './pipes/status.pipe';
import { MyDateRangePickerModule } from 'mydaterangepicker';
import { ObjectPipePipe } from './pipes/object-pipe.pipe';
@NgModule({
  imports: [
    CommonModule, NgxPaginationModule, NgxMyDatePickerModule.forRoot(), MyDateRangePickerModule
  ],
  declarations: [ErrorMessagesComponent, FilterPipePipe, StatusPipe, ObjectPipePipe, ProjectsPopComponent, ObjectPipePipe],
  exports: [ErrorMessagesComponent, FilterPipePipe, NgxPaginationModule, StatusPipe, ObjectPipePipe, NgxMyDatePickerModule, MyDateRangePickerModule, ProjectsPopComponent],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [FormsValidationService, StatusPipe, ObjectPipePipe]
    };
  }
}
