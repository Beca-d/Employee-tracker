// Requirements
const express = require('express');
const inquirer = require("inquirer");
const chalk = require ("chalk");
const db = require('./db/connection');

const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//Prompt user for choice
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'What whould you like to do?',
            choices: ['View all Roles','View all Employees', 
                        'Add a Department','Add a Role','Add an Employee',
                        'Update an Employee Role','Exit']
        }
    ]).then(val => {
        switch (val.choice) {
            case "View all Departments":
                viewAllDepartments();
                break;
            case "View all Roles":
                viewAllRoles();
                break;
            case "View all Employees":
                viewAllEmployees();
                break;             
            case "Exit":
                db.end();
                break;
        }
    })
};

const viewAllDepartments = () => {
    db.query(`SELECT name AS department_name, id AS departament_id 
    FROM departments`, (err, rows) => {
    if (err){
        console.log(err)
    }
    console.log(chalk.hex('#348ceb').bold(`→ Total Departments:`));
    console.table(rows);
    promptUser();
    });
};

const viewAllRoles = () => {
    db.query(`SELECT roles.title, roles.id, departments.name AS department, 
    roles.salary FROM roles
    LEFT JOIN departments ON roles.department_id = departments.id`, (err, rows) => {
    if (err){
        console.log(err)
    }
    console.log(chalk.hex('#348ceb').bold(`→ Total Roles:`));
    console.table(rows);
    promptUser();
    });
};

const viewAllEmployees = () => {
    var sql = `SELECT employees.id, employees.first_name, employees.last_name,
                roles.title, departments.name AS department, 
                roles.salary, employees.manager_id FROM employees
                LEFT JOIN roles ON employees.role_id = roles.id
                LEFT JOIN departments ON roles.department_id = departments.id`;
    db.query(sql, (err, rows) => {
      if (err){
        console.log(err)
      }
      console.log(chalk.hex('#348ceb').bold(`→ Current Employees:`));
      console.table(rows);
      promptUser();
    });
};

// Start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected as ID ' +db.threadId);
   
    promptUser();
});