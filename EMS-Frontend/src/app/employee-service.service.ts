import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeServiceService {
  apiurl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getEmployee(): Observable<any> {
    return this.http.get(`${this.apiurl}/employee-details/displayalldata`);
  }

  insertEmployee(employee: any): Observable<any> {
    return this.http.post(`${this.apiurl}/employee-details/insertdata`, employee);
  }

  updateEmployee(employee: any) {
    return this.http.put(`${this.apiurl}/employee-details/updatedata`, employee);
  }

  deleteEmployee(id: any) {
    return this.http.delete(`${this.apiurl}/employee-details/deletedata/${id}`);
  }

  getEmployeeById(id: any) {
    return this.http.get(`${this.apiurl}/employee-details/getemployeebyid/${id}`);
  }
}
