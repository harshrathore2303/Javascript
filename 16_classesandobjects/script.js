const student = {
    fullName : "Harsh",
    marks : 94.4,
    printMarks: function(){
        console.log("marks: ", marks);
    }
}

const emplyee = {
    calcTax() {
        console.log("tax rate os 10%");
    },
    calcTax2 : function() {
        console.log("tax rate os 10%");
    }
};

const karanArjun = {
    salary : 50000,
}

karanArjun.__proto__ = emplyee;

//CLasses

class Car {
    constructor(brand, milage) {
        console.log(brand, milage);
        this.brand = brand;
        this.milage = milage;
    }
    start() {
        console.log("start");
    }

    stop() {
        console.log("stop");
    }
}

let fortuner = new Car("Toyota", 10);
let lexus = new Car();