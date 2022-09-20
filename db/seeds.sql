-- Department seeds--
INSERT INTO departments (name)
VALUE ("Engineering"),("Finance"),("Legal"),("Sales");

-- Role seeds--
INSERT INTO roles (title, salary, department_id)
VALUE ("Sales Lead", 150000, 4),
("Salesperson", 80000, 4),
("Developer", 175000, 1),
("Finance Lead", 160000, 2),
("CEO", 250000, 2),
("Lawyer", 180000, 3);

-- Employee seeds--
INSERT INTO employees (first_name, last_name, manager_id, role_id)
VALUE ("Jack", "Douger", 2, 3),
("Julie", "French", 1, 2),
("Steve", "Smith", 3, 1),
("Les", "Johnson", 1, 4),
("Mary", "Derry", 2, 5),
("Beca", "Rhodes", 3, 6),
("Dolapo", "Green", 4, 2),
("Linda", "Miller", 1, 1),
("Meghan", "Stock", 2, 3),
("Elsie", "Metelka", 4, 4),
("Sasha", "Teems", 3, 5),
("Jimmy", "Jones", null, 6);