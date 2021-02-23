const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/user', function (req, res) {
    res.send('사용자페이지입니다.')
})

app.get('/upload', function (req, res) {
    res.send('게시물페이지입니다.')
})

app.get('/community', function (req, res) {
    res.send('소통페이지입니다.')
})

app.listen(3000)