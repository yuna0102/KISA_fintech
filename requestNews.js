const request = require('request');
request('http://newsapi.org/v2/top-headlines?country=kr&category=sports&apiKey=78bc6ddd8cdb48ceac76f5f9b9dfc4c5 ', function (error, response, body) {
    var data = JSON.parse(body);
    data.articles.map((article) => {
        console.log(article.title)
    })
});