const mysql = require('mysql2');
const chalk = require ("chalk");
require('dotenv').config();

//connect to sql database 
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: process.env.DB_PASSWORD,
        database: 'employeeDatabase'
    },
    console.log(chalk.hex('#D6D629').bold('Connected to the Employee Database!'))
);

module.exports = db;