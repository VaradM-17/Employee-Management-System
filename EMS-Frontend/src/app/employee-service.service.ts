import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeServiceService {
  apiurl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  //display all
  getEmployee(): Observable<any> {
    return this.http.get(`${this.apiurl}/employee-details/displayalldata`);
  }

  //insert data
  insertEmployee(employee: any): Observable<any> {
    return this.http.post(
      `${this.apiurl}/employee-details/insertdata`,
      employee
    );
  }

  //update data
  updateEmployee(employee: any) {
    return this.http.put(
      `${this.apiurl}/employee-details/updatedata`,
      employee
    );
  }

  //delete data
  deleteEmployee(id: any) {
    return this.http.delete(`${this.apiurl}/employee-details/deletedata/${id}`);
  }

  //getEmployeeById
  getEmployeeById(id: any) {
    return this.http.get(
      `${this.apiurl}/employee-details/getemployeebyid/${id}`
    );
  }
}
