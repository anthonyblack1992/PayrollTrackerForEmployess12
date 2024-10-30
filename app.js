const express = require('express');
const inquirer = require('inquirer');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Function to prompt user input
const promptUser = async () => {
  const { action } = await inquirer.prompt({
    type: 'list',
    name: 'action',
    message: 'What would you like to do?',
    choices: [
      'View all departments',
      'View all roles',
      'View all employees',
      'Add a department',
      'Add a role',
      'Add an employee',
      'Update an employee role',
      'Exit',
    ],
  });

  switch (action) {
    case 'View all departments':
      viewDepartments();
      break;
    case 'View all roles':
      viewRoles();
      break;
    case 'View all employees':
      viewEmployees();
      break;
    case 'Add a department':
      addDepartment();
      break;
    case 'Add a role':
      addRole();
      break;
    case 'Add an employee':
      addEmployee();
      break;
    case 'Update an employee role':
      updateEmployeeRole();
      break;
    case 'Exit':
      process.exit();
  }
};

// Function to view all departments
const viewDepartments = async () => {
  const res = await db.query('SELECT * FROM department');
  console.table(res.rows);
  promptUser();
};

// Function to view all roles
const viewRoles = async () => {
  const res = await db.query('SELECT * FROM role');
  console.table(res.rows);
  promptUser();
};

// Function to view all employees
const viewEmployees = async () => {
  const res = await db.query('SELECT * FROM employee');
  console.table(res.rows);
  promptUser();
};

// Function to add a department
const addDepartment = async () => {
  const { name } = await inquirer.prompt({
    type: 'input',
    name: 'name',
    message: 'Enter the name of the department:',
  });
  await db.query('INSERT INTO department (name) VALUES ($1)', [name]);
  console.log(`Department ${name} added.`);
  promptUser();
};

// Function to add a role
const addRole = async () => {
  const { title, salary, department_id } = await inquirer.prompt([
    { type: 'input', name: 'title', message: 'Enter the role title:' },
    { type: 'input', name: 'salary', message: 'Enter the role salary:' },
    { type: 'input', name: 'department_id', message: 'Enter the department ID:' },
  ]);
  await db.query('INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)', [title, salary, department_id]);
  console.log(`Role ${title} added.`);
  promptUser();
};

// Function to add an employee
const addEmployee = async () => {
  const { first_name, last_name, role_id, manager_id } = await inquirer.prompt([
    { type: 'input', name: 'first_name', message: 'Enter the employee first name:' },
    { type: 'input', name: 'last_name', message: 'Enter the employee last name:' },
    { type: 'input', name: 'role_id', message: 'Enter the role ID:' },
    { type: 'input', name: 'manager_id', message: 'Enter the manager ID (leave blank if none):' },
  ]);
  await db.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)', [first_name, last_name, role_id, manager_id || null]);
  console.log(`Employee ${first_name} ${last_name} added.`);
  promptUser();
};
     const updateEmployeeRole = async () => {
        const employees = await db.query('SELECT id, first_name, last_name FROM employee');
        const employeeChoices = employees.rows.map(emp => ({
          name: `${emp.first_name} ${emp.last_name}`,
          value: emp.id,
        }));
      
        const { employeeId, newRoleId } = await inquirer.prompt([
          {
            type: 'list',
            name: 'employeeId',
            message: 'Select an employee to update their role:',
            choices: employeeChoices,
          },
          {
            type: 'input',
            name: 'newRoleId',
            message: 'Enter the new role ID for the selected employee:',
          },
        ]);
      
        await db.query('UPDATE employee SET role_id = $1 WHERE id = $2', [newRoleId, employeeId]);
        console.log(`Employee's role updated.`);
        promptUser();
      };
      
      // Start the application
      app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
        promptUser(); // Start the user prompt
      });
     

