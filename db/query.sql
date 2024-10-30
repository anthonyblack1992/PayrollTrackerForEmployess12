-- 1. View all departments
SELECT * FROM department;

-- 2. View all roles with their department names
SELECT role.id, role.title, role.salary, department.name AS department_name
FROM role
JOIN department ON role.department_id = department.id;

-- 3. View all employees with their roles and managers
SELECT employee.id, employee.first_name, employee.last_name, role.title AS job_title, 
       department.name AS department_name, role.salary, 
       (SELECT CONCAT(m.first_name, ' ', m.last_name) FROM employee m WHERE m.id = employee.manager_id) AS manager_name
FROM employee
JOIN role ON employee.role_id = role.id
JOIN department ON role.department_id = department.id;

-- 4. Add a new department
INSERT INTO department (name) VALUES ('Finance');

-- 5. Add a new role
INSERT INTO role (title, salary, department_id) VALUES ('Financial Analyst', 70000, 1);

-- 6. Add a new employee
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('David', 'Johnson', 1, NULL);

-- 7. Update an employee's role
UPDATE employee
SET role_id = 2
WHERE id = 1;  -- Update the role of the employee with id 1

-- 8. Update an employee's manager
UPDATE employee
SET manager_id = 2
WHERE id = 3;  -- Update the manager of the employee with id 3

-- 9. Delete a department
DELETE FROM department
WHERE id = 4;  -- Delete the department with id 4

-- 10. Delete a role
DELETE FROM role
WHERE id = 5;  -- Delete the role with id 5

-- 11. Delete an employee
DELETE FROM employee
WHERE id = 6;  -- Delete the employee with id 6

-- 12. View the total utilized budget of a department
SELECT department.name, SUM(role.salary) AS total_budget
FROM department
JOIN role ON department.id = role.department_id
JOIN employee ON role.id = employee.role_id
GROUP BY department.name;

