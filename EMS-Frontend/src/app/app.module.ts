import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InsertdataComponent } from './insertdata/insertdata.component';
import { UpdatedataComponent } from './updatedata/updatedata.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailsComponent,
    InsertdataComponent,
    UpdatedataComponent,
    FilterPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
