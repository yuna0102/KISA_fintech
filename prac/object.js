var car = {
	name : "sonata",
	ph : "500ph",
	start : function () {
		console.log("engine is starting");
	},
	stop : function () {
		console.log("engine is stoped");
	}
}

var car2 = {
	name : "BMW",
	ph : "500ph",
	start : function () {
		console.log("engine is starting");
	},
	stop : function () {
		console.log("engine is stoped");
	}
}

var car3 = {
	name : "ford",
	ph : "500ph",
	start : function () {
		console.log("engine is starting");
	},
	stop : function () {
		console.log("engine is stoped");
	}
}



var cars = [car, car2, car3];


//#Work2 자동차 배열에서 bmw 라는 이름을가진 차량을 찾으면 "!" 출력하세요 for / if
var i;
var find;
for (i=0; i<cars.length; i++) {
	var car = cars[i];
	if(car.name === "BMW") {
		console.log("!");
	}
}