import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentsComponent } from './documents.component';
import { RoutesModule } from './documents.routing';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FoldersComponent } from './folders/folders.component';
import { ArrayPipe } from './Pipes/array.pipe';
import { DocumentComponent } from './documents/documents.component';
@NgModule({
  imports: [
    CommonModule, RoutesModule, SharedModule, FormsModule, ReactiveFormsModule
  ],
  declarations: [DocumentsComponent, FoldersComponent, ArrayPipe, DocumentComponent],
  providers: [ArrayPipe]
})
export class DocumentsModule { }
