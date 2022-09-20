const mysql = require('mysql2');
require('dotenv').config();

//connect to sql database 
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: process.env.DB_PASSWORD,
        database: 'employeeDatabase'
    },
    console.log('Connected to the employees database!')
);

module.exports = db;