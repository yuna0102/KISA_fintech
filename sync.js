var fs = require('fs');
console.log('A');
var result = fs.readFileSync('./example/text.txt', 'utf8'); //비동기방식으로 파일 처리
console.log(result);
console.log('C');