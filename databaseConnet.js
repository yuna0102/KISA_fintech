//database에 있는 data를 가져오는 것
var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'phgbbynl0102^0^mysql',
    database : 'fintech',
    port : '3307'
});

connection.connect();

connection.query('SELECT * FROM fintech.user;', function (error, results, fields) {
    console.log(results);
});

connection.end();