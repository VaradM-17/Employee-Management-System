import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { InsertdataComponent } from './insertdata/insertdata.component';
import { UpdatedataComponent } from './updatedata/updatedata.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'employee-details',
    pathMatch: 'full',
  },
  {
    path: 'employee-details',
    component: EmployeeDetailsComponent,
  },
  {
    path: 'insert',
    component: InsertdataComponent,
  },
  { path: 'updatedata/:id',
    component: UpdatedataComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
