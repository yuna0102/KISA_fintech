var http = require("http");

http.createServer(function (req, res) {
    var body = "hello Server";
    res.setHeader('Content-Type', 'test/plain; charset=utf-8');
    res.end("안녕하세요. 저는 node.js 입문자입니다.뿌에엥 어려워요오오옹")
}).listen(3000);
