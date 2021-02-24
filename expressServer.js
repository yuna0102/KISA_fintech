//express라는 framework를 통해 서버를 띄우는 것을 연습
//view를 담당하는 템플릿엔진을 통해 구조화
const express = require('express'); //const는 재할당이 필요없는 변수선언
const path = require('path');
const app = express();

//Expressjs에서 JSON request Body 파싱하기
app.use(express.json());
//json 타입의 데이터 전송을 허용
app.use(express.urlencoded({ extended: false }));
//form 타입의 데이터 전송을 허용
app.use(express.static(path.join(__dirname, 'public'))); //to use static asset
//expressjs에서 사용자가 원하는 경로에 static 파일 지정
app.set('views', __dirname + '/views');
//뷰파일이 있는 디렉토리 위치를 설정함
//이 경로의 디렉토리에 있는 파일들을 불러올 것임
app.set('view engine', 'ejs');
//뷰엔진으로 ejs 사용한다


// connection.end();

app.get('/', function (req, res) {
    res.send('Hello World');
})//express 각 url에 따른 data 수집

app.get('/user', function (req, res) {
    connection.query('SELECT * FROM fintech.user;', function (error, results, fields) {
        console.log(results);
        res.send('사용자페이지입니다.')
    });
})

app.get('/ejs', function (req, res) {
    res.render('ejsTest.ejs');
})//특정 값을 반환하는 것이 아니라 ejsTest.ejs라는 파일을 render 시킴

app.post('/userData', function(req, res) {
    console.log("사용자의 요청이 발생했습니다.");
    console.log(req.body); //ejs 파일에서 data가 req의 body에 담겨옴
    res.send(true);
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


app.listen(3000);