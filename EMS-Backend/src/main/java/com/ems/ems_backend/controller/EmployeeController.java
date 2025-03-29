package com.ems.ems_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ems.ems_backend.entity.Employee;
import com.ems.ems_backend.service.EmployeeService;


@RestController
@CrossOrigin("http://localhost:4200")

@RequestMapping("/employee-details")
public class EmployeeController {

	@Autowired
	EmployeeService employeeservice;

	@PostMapping("/insertdata")
	public Employee insertData(@RequestBody Employee employee) {
		return employeeservice.insertData(employee);
	}

	@PutMapping("/updatedata")
	public Employee updateData(@RequestBody Employee employee) {
		return employeeservice.updateData(employee);
	}

	@DeleteMapping("/deletedata/{id}")
	public Employee deleteData(@PathVariable int id) {
		return employeeservice.deleteData(id);
	}

	@GetMapping("/displayalldata")
	public List<Employee> displayallData() {
		List<Employee> list = employeeservice.displayallData();
		return list;
	}

	@GetMapping("/getemployeebyid/{id}")
	public Employee getEmployeeById(@PathVariable int id) {
		Employee e = employeeservice.getEmployeeById(id);
		return e;
	}

	@GetMapping("/inactive")
	public List<Employee> displayinactive() {
		List<Employee> emp = employeeservice.displayinactive();
		return emp;
	}
	
	@GetMapping("/sort/{field}")
    public List<Employee> getSortedEmployees(@PathVariable String field) {
        return employeeservice.getSortedEmployees(field);
    }

}
