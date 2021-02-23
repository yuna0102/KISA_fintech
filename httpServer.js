var http = require("http");

console.log("server started")
http.createServer(function (req, res) { //서버를 만드는 콜백함수
    var body = "hello Server"; //서버가 담고 있어야 할 정보들을 정의해주는 것
    res.setHeader('Content-Type', 'test/plain; charset=utf-8');
    res.end("<html><h1 style='color : red'>안녕 클레오파트라!</h1></html>") 
}).listen(3001); //3000번 port
