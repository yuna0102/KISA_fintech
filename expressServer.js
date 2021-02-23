//express라는 framework를 통해 서버를 띄우는 것을 연습
//view를 담당하는 템플릿엔진을 통해 구조화
const express = require('express');
const app = express();

app.set('views', __dirname + '/views');
//뷰파일이 있는 디렉토리 위치를 설정함
//이 경로의 디렉토리에 있는 파일들을 불러올 것임
app.set('view engine', 'ejs');
//뷰엔진으로 ejs 사용한다


// connection.end();
app.get('/', function (req, res) {
    res.send('Hello World');
})

app.get('/user', function (req, res) {
    connection.query('SELECT * FROM fintech.user;', function (error, results, fields) {
        console.log(results);
        res.send('사용자페이지입니다.')
    });
})

app.get('/ejs', function (req, res) {
    res.render('ejsTest.ejs');
})


var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'phgbbynl0102^0^mysql',
    database : 'fintech',
    port : '3307'
});
connection.connect();


app.listen(3000)