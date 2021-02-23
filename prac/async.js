var fs = require('fs'); //require는 request와 같은 것 : 파일을 불러온다

console.log('first func')
fs.readFile('./example/test.txt', 'utf8', function(err, result) { //exmplae폴더 안에 있는 text.txt를 불러오는데 그 형식이 utf8이다.
    if (err) {
        console.error(err);
        throw err;
    }
    else { 
        console.error("두번째 기능인데 파일을 읽어오느라 시간이 걸린다.");
        console.log(result);
        console.log('third func')
    }
});

//결과가 순서대로 불러와지지 않고, 빨리 걸리는 일부터 처리된다.
//따라서 first func-third func-두번째 기능-result 순으로 나온다.
//따라서 순서대로 처리하기 위해서는 callback 안으로 마지막 함수를 넣는다