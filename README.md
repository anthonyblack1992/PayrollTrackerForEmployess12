# PayrollTrackerForEmployess12

User Story
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database




You'll need to use the pg packageLinks to an external site. to connect to your PostgreSQL database and perform queries, and the Inquirer packageLinks to an external site. to interact with the user via the command line.

You will be committing a file that contains your database credentials. Make sure that your PostgreSQL password is not used for any other personal accounts, because it will be visible on GitHub. In upcoming lessons, you will learn how to better secure this password, or you can start researching npm packages now that could help you.

As the image illustrates, your schema should contain the following three tables:

department

id: SERIAL PRIMARY KEY

name: VARCHAR(30) UNIQUE NOT NULL to hold department name

role

id: SERIAL PRIMARY KEY

title: VARCHAR(30) UNIQUE NOT NULL to hold role title

salary: DECIMAL NOT NULL to hold role salary

department_id: INTEGER NOT NULL to hold reference to department role belongs to

employee

id: SERIAL PRIMARY KEY

first_name: VARCHAR(30) NOT NULL to hold employee first name

last_name: VARCHAR(30) NOT NULL to hold employee last name

role_id: INTEGER NOT NULL to hold reference to employee role

manager_id: INTEGER to hold reference to another employee that is the manager of the current employee (null if the employee has no manager)

You might want to use a separate file that contains functions for performing specific SQL queries you'll need to use. A constructor function or class could be helpful for organizing these. You might also want to include a seeds.sql file to pre-populate your database, making the development of individual features much easier.

Bonus
Try to add some additional functionality to your application, such as the ability to do the following:

Update employee managers.

View employees by manager.

View employees by department.

Delete departments, roles, and employees.

View the total utilized budget of a department—in other words, the combined salaries of all employees in that department.