function aFunc() {
    setTimeout(function () { //setTimeout은 말그대로 잠깐 멈추는 것임
        console.log('a');
    },1700) //1.7초 뒤에 a를 실행
}

function bFunc() {
    setTimeout(function () { //callback 함수 부분
        console.log('b');
    },1000) //1초뒤에 b라는 기능을 실행시킴
}

function cFunc() {
    setTimeout(function () {
        console.log('c');
    },500) //0.5초뒤에 c를 실행
}

aFunc();
bFunc();
cFunc();
