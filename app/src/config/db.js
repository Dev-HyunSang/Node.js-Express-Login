const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "parkhs0625",
    database: "login_lecture"
});

db.connect();

module.exports = db;