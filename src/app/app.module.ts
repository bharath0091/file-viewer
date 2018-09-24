import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FileLoaderComponent} from './file-loader/file-loader.component';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import {ResultsFilterPipe} from './employee-list/results-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FileLoaderComponent,
    EmployeeListComponent,
    ResultsFilterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
