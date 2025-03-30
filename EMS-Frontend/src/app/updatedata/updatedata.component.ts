import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-updatedata',
  templateUrl: './updatedata.component.html',
  styleUrls: ['./updatedata.component.css'],
})
export class UpdatedataComponent implements OnInit {
  updateForm: FormGroup;
  newid: any;

  constructor(
    private fb: FormBuilder,
    private service: EmployeeServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.updateForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      phoneno: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      departmentit: ['', Validators.required],
      status: [''],
      createdby: ['', Validators.required],
      updatedby: ['', Validators.required],
      updateddtm: [new Date().toISOString()],
    });
  }

  ngOnInit() {
    this.newid = this.activatedRoute.snapshot.paramMap.get('id');
    this.service.getEmployeeById(this.newid).subscribe({
      next: (response) => {
        this.updateForm.patchValue(response);
      },
      error: () => {
        alert('Error fetching employee data');
      },
    });
  }

  updateEmployee() {
    if (this.updateForm.invalid) {
      alert('Please fill all fields correctly.');
      return;
    }

    this.updateForm.value.updateddtm = new Date().toISOString();
    this.service.updateEmployee(this.updateForm.value).subscribe({
      next: () => {
        alert('✅ Employee Data Updated Successfully!');
        this.router.navigate(['/employee-details']);
      },
      error: () => {
        alert('❌ Failed to update employee.');
      },
    });
  }
}
