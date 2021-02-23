const express = require('express')
const app = express()
var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'phgbbynl0102^0^mysql',
    database : 'fintech',
    port : '3307'
});
connection.connect();
// connection.end();

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/user', function (req, res) {
    connection.query('SELECT * FROM fintech.user;', function (error, results, fields) {
        console.log(results);
        res.send('사용자페이지입니다.')
    });
})

app.listen(3000)