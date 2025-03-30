import { Component } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent {
  constructor(
    private service: EmployeeServiceService,
    private router: Router
  ) {}

  employee: any[] = [];
  filteredEmployees: any[] = [];
  searchKeyword: string = '';

  ngOnInit() {
    this.getEmployees();
  }

  // Display all employees
  getEmployees() {
    this.service.getEmployee().subscribe({
      next: (response) => {
        this.employee = response;
        this.filteredEmployees = [...this.employee];
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  // Insert data
  insertData() {
    this.router.navigate(['/insert']);
  }

  // Update data
  updateData(id: any) {
    this.router.navigate(['/update-employee', id]);
  }

  // Delete data
  deleteHandler(id: any) {
    this.service.deleteEmployee(id).subscribe({
      next: () => {
        alert('✅ Employee Deleted Successfully!');
        this.getEmployees();
      },
      error: (error) => {
        console.log(error);
        alert('❌ Error deleting employee. Please try again.');
      },
    });
  }

  // Search employees
  searchData() {
    const keyword = this.searchKeyword.trim().toLowerCase();
  
    if (!keyword) {
      this.filteredEmployees = [...this.employee]; 
      return;
    }
  
    this.filteredEmployees = this.employee.filter(emp => 
      emp.id.toString().toLowerCase() === keyword || 
      emp.name.toLowerCase().includes(keyword) 
    );
  }
  

  // Sort employees
  sortData(event: any) {
    const sortBy = event.target.value;
    if (sortBy) {
      this.filteredEmployees.sort((a: any, b: any) => {
        if (sortBy === 'id') {
          return a.id - b.id;
        }
        return a[sortBy]
          .toString()
          .toLowerCase()
          .localeCompare(b[sortBy].toString().toLowerCase()); 
      });
    }
  }
}
