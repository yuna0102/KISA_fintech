//xml형식의 파일을 불러와서 띄우는 법
//원하는 정보만 찾아서 가져오는 법
const request = require('request');
var parseString = require('xml2js').parseString;

request('http://www.weather.go.kr/weather/forecast/mid-term-rss3.jsp?stnld=109', function (error, response, body) {
    xml = body;
    parseString(xml, function (err, result) {
    console.dir(result.rss.channel[0].item[0].description[0].header[0].wf);
    });
});