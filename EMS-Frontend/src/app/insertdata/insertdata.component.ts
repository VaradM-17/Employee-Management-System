import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeServiceService } from '../employee-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insertdata',
  templateUrl: './insertdata.component.html',
  styleUrls: ['./insertdata.component.css'],
})
export class InsertdataComponent {
  employeeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: EmployeeServiceService,
    private router: Router
  ) {
    this.employeeForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('^[a-zA-Z ]+$'),
        ],
      ],
      phoneno: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      departmentit: ['', Validators.required],
      status: ['', Validators.required],
      createdby: ['', Validators.required],
    });
  }

  get f() {
    return this.employeeForm.controls;
  }

  submitHandler() {
    if (this.employeeForm.invalid) {
      alert('Please fill all fields correctly.');
      return;
    }

    this.service.insertEmployee(this.employeeForm.value).subscribe({
      next: () => {
        alert('Employee data inserted successfully!');
        this.router.navigate(['/employee-details']);
      },
      error: () => {
        alert('Failed to insert employee data. Please try again.');
      },
    });
  }
}
