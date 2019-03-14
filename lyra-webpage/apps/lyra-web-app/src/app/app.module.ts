import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from '@lyra-webpage/core';
import { FilterBarModule } from '@lyra-webpage/filter-bar';
import { TableGridModule } from '@lyra-webpage/table-grid';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreModule, FilterBarModule, TableGridModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
