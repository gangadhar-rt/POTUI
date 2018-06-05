import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMessagesComponent, FormsValidationService, ProjectsPopComponent } from './';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxMyDatePickerModule } from 'ngx-mydatepicker';
import { StatusPipe } from './pipes/status.pipe';
import { MyDateRangePickerModule } from 'mydaterangepicker';
import { ObjectPipePipe } from './pipes/object-pipe.pipe';
import { ToastModule, ToastsManager, ToastOptions } from 'ng2-toastr/ng2-toastr';
import { ErroralertComponent } from './components/erroralert/erroralert.component';
import { ErroralertService } from './services/erroralert.service';
@NgModule({
  imports: [
    CommonModule, NgxPaginationModule, NgxMyDatePickerModule.forRoot(), MyDateRangePickerModule, ToastModule
  ],
  declarations: [ErrorMessagesComponent, FilterPipePipe, StatusPipe, ObjectPipePipe,
    ProjectsPopComponent, ObjectPipePipe, ErroralertComponent],
  exports: [ErrorMessagesComponent, FilterPipePipe, NgxPaginationModule, StatusPipe, ObjectPipePipe, ToastModule,
    NgxMyDatePickerModule, MyDateRangePickerModule, ProjectsPopComponent, ErroralertComponent],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [FormsValidationService, StatusPipe, ObjectPipePipe, ToastsManager, ToastOptions, ErroralertService]
    };
  }
}
