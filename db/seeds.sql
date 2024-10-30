INSERT INTO department (name) VALUES
('Sales'),
('Engineering'),
('Human Resources'),
('Marketing');

-- Insert sample roles
INSERT INTO role (title, salary, department_id) VALUES
('Sales Manager', 80000, 1),
('Sales Associate', 50000, 1),
('Software Engineer', 90000, 2),
('DevOps Engineer', 95000, 2),
('HR Manager', 70000, 3),
('Recruiter', 60000, 3),
('Marketing Manager', 75000, 4),
('Content Writer', 50000, 4);

-- Insert sample employees
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
('John', 'Doe', 1, NULL), -- Sales Manager
('Jane', 'Smith', 2, 1),  -- Sales Associate
('Alice', 'Johnson', 3, NULL), -- Software Engineer
('Bob', 'Brown', 4, NULL), -- DevOps Engineer
('Charlie', 'Davis', 5, NULL), -- HR Manager
('Eve', 'Wilson', 6, 5), -- Recruiter
('Frank', 'Moore', 7, NULL), -- Marketing Manager
('Grace', 'Taylor', 8, 7); -- Content Writer