import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TableComponent, PaginationComponent],
  exports: [TableComponent]
})
export class TableGridModule {}
