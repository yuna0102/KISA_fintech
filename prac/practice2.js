var car1 = {
    name : "sonata",
    ph : "500ph",
    start : function() {
        console.log("sonata is starting");
    },
    stop : function() {
        console.log("sonata is stopped");
    }
}


var car2 = {
    name : "venz",
    ph : "500ph",
    start : function() {
        console.log("venz is starting");
    },
    stop : function() {
        console.log("venz is stopped");
    }
}

cars = [car1, car2];
console.log(cars);