import { Component } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insertdata',
  templateUrl: './insertdata.component.html',
  styleUrls: ['./insertdata.component.css'],
})
export class InsertdataComponent {
  displayData() {
    throw new Error('Method not implemented.');
  }
  employee = {
    id: 0,
    name: '',
    phoneno: '',
    departmentit: '',
    status: 'Active',
    createdby: '',
    updatedby: '',
    createddtm: new Date().toISOString(),
    updateddtm: new Date().toISOString(),
  };

  constructor(private service: EmployeeServiceService, private router: Router) {}

  submitHandler() {
    this.service.insertEmployee(this.employee).subscribe({
      next: (response) => {
        alert('Employee data inserted successfully!');
        this.employee = response;
        this.router.navigate(['/employee-details']);
      },
      error: (error) => {
        alert('Failed to insert employee data. Please try again.');
      },
    });
  }
}
