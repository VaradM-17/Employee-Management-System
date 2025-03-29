package com.ems.ems_backend.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ems.ems_backend.entity.Employee;


@Repository
public class EmployeeDao {

	@Autowired
	SessionFactory factory;

	public Employee insertdata(Employee employee) {
		Session ss = null;
		Transaction tx = null;
		Employee emp = null;

		try {
			ss = factory.openSession();
			tx = ss.beginTransaction();

			ss.persist(employee);

			tx.commit();
			emp = employee;

		} catch (Exception e) {

			if (tx != null) {
				tx.rollback();
			}

			e.printStackTrace();
		} finally {
			if (ss != null) {
				ss.close();
			}
		}
		return emp;
	}

	public Employee updateData(Employee employee) {

		Session ss = null;
		Transaction tx = null;
		Employee emp = null;

		try {
			ss = factory.openSession();
			tx = ss.beginTransaction();

			ss.merge(employee);
			tx.commit();
			emp = employee;

		} catch (Exception e) {
			if (tx != null) {
				tx.rollback();
			}
			e.printStackTrace();
		} finally {
			if (ss != null) {
				ss.close();
			}
		}
		return emp;

	}

	public Employee deleteData(int id) {
		Session ss = null;
		Transaction tx = null;
		Employee emp = null;

		try {
			ss = factory.openSession();
			tx = ss.beginTransaction();

			emp = ss.get(Employee.class, id);
			ss.remove(emp);
			tx.commit();
			return emp;

		} catch (Exception e) {
			if (tx != null) {
				tx.rollback();
			}
			e.printStackTrace();
		} finally {
			if (ss != null) {
				ss.close();
			}
		}
		return emp;
	}

	public List<Employee> displayallData() {

		Session ss = null;
		Transaction tx = null;
		List<Employee> list = null;

		try {
			ss = factory.openSession();
			tx = ss.beginTransaction();

			String hqlQuery = "from Employee";
			Query<Employee> query = ss.createQuery(hqlQuery, Employee.class);
			list = query.list();

			tx.commit();

			return list;
		} catch (Exception e) {
			if (tx != null) {
				tx.rollback();
			}
			e.printStackTrace();
		} finally {
			if (ss != null) {
				ss.close();
			}
		}
		return list;
	}

	// by id
	public Employee getEmployeeById(int id) {

		Session ss = null;
		Transaction tx = null;
		Employee emp = null;

		try {
			ss = factory.openSession();
			tx = ss.beginTransaction();

			String hqlQuery = "from Employee where id = :myid";
			Query<Employee> query = ss.createQuery(hqlQuery, Employee.class);
			query.setParameter("myid", id);

			emp = query.getSingleResult();

			tx.commit();

			return emp;

		} catch (Exception e) {
			if (tx != null) {
				tx.rollback();
			}
			e.printStackTrace();
		} finally {
			if (ss != null) {
				ss.close();
			}
		}
		return emp;
	}

	// by status

	public List<Employee> displayinactive() 
	{

		Session ss = null;
		Transaction tx = null;
		List<Employee> inactive = null;

		try {
			ss = factory.openSession();
			tx = ss.beginTransaction();

			String hqlQuery = "from Employee where status = 'inactive'";
			Query<Employee> query = ss.createQuery(hqlQuery, Employee.class);
			inactive = query.list();

			tx.commit();

		} catch (Exception e) {
			if (tx != null) {
				tx.rollback();
			}
			e.printStackTrace();
		} finally {
			if (ss != null) {
				ss.close();
			}
		}
		return inactive;
	}

	public List<Employee> getSortedEmployees(String field) 
	{
        Session ss = null;
        Transaction tx = null;
        List<Employee> sortedList = null;

        try {
            ss = factory.openSession();
            tx = ss.beginTransaction();
            String hqlQuery = "from Employee order by " + field;
            Query<Employee> query = ss.createQuery(hqlQuery, Employee.class);
            sortedList = query.list();
            tx.commit();
        } catch (Exception e) {
            if (tx != null) tx.rollback();
            e.printStackTrace();
        } finally {
            if (ss != null) ss.close();
        }
        return sortedList;
    }
}
	

