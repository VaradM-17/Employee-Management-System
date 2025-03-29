package com.ems.ems_backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ems.ems_backend.dao.EmployeeDao;
import com.ems.ems_backend.entity.Employee;

@Service
public class EmployeeService {

	@Autowired
	EmployeeDao employeedao;

	public Employee insertData(Employee employee) {
		return employeedao.insertdata(employee);
	}

	public Employee updateData(Employee employee) {
		return employeedao.updateData(employee);
	}

	public Employee deleteData(int id) {
		return employeedao.deleteData(id);
	}

	public List<Employee> displayallData() {
		List<Employee> list = employeedao.displayallData();
		return list;
	}

	public Employee getEmployeeById(int id) {
		Employee emp = employeedao.getEmployeeById(id);
		return emp;
	}

	public List<Employee> displayinactive() {
		List<Employee> emp = employeedao.displayinactive();
		return emp;
	}

	public List<Employee> getSortedEmployees(String field) {
		return employeedao.getSortedEmployees(field);
	}

}
