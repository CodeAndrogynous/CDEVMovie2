var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'database-1.ccbqtvifzmrg.us-west-2.rds.amazonaws.com',
    port: '3306',
    user: 'admin',
    password: 'password1234',
    database: 'movie_info'
});

connection.connect(err => {  // test out connetion and console.log error if there is one
    if (err) throw err;
    console.log('Connected To AWS DB');
}); 
module.exports = connection;

