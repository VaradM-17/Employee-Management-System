import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';

export
@Component({
  selector: 'app-updatedata',
  templateUrl: './updatedata.component.html',
  styleUrls: ['./updatedata.component.css'],
})
class UpdatedataComponent {
  employee: any = {
    id: '',
    name: '',
    phoneno: '',
    departmentit: '',
    status: '',
    createdby: '',
    updatedby: '',
  };

  newid: any;
  updateemployee: any;

  constructor(
    private service: EmployeeServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.newid = this.activatedRoute.snapshot.paramMap.get('id');
    this.updateemployee = {
      id: '',
      name: '',
      phoneno: '',
      departmentit: '',
      status: '',
      createdby: '',
      updatedby: '',
    };

    //fetch single first to see existing on page
    this.service.getEmployeeById(this.newid).subscribe({
      next: (response) => {
        this.updateemployee = response;
      },
      error: (err) => {
        console.error('Error fetching employee data:', err);
      },
    });
  }

  // after seeing update information and submit
  updateEmployee() {
    //to update date ,time,month
    this.updateemployee.updateddtm = new Date().toISOString();

    //submitting updated data
    this.service.updateEmployee(this.updateemployee).subscribe({
      next: () => {
        alert('✅ Employee Data Updated Successfully!');
        this.router.navigate(['/employee-details']);
      },
      error: (err) => {
        alert('❌ Failed to update employee. Please try again.');
      },
    });
  }
}
