const mysql = require('mysql2');
const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;
const dbConnection = mysql.createPool({
host: DB_HOST,
user: DB_USER,
password: DB_PASSWORD,
database: DB_NAME
});
module.exports = dbConnection.promise();