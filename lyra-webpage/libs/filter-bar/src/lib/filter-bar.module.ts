import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterBarComponent } from './filter-bar/filter-bar.component';
import { FilterContentsComponent } from './filter-contents/filter-contents.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FilterBarComponent, FilterContentsComponent],
  exports: [FilterBarComponent, FilterContentsComponent]
})
export class FilterBarModule {}
