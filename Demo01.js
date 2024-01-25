function Vehicle(model,year) {
    this.model = model;
    this.year = year;
    this.park = function () {
        return this.model + "-" + this.year + " is going to park";
    }
}

function  Car(model,year) {
}

var v1 = new Vehicle("Benz", 2020);
var res = v1.park();
console.log(res);

Car.prototype = Vehicle.prototype;

var c1 = new Car("Toyoto", 1998);

Vehicle.prototype.testVehicle =100;
Car.prototype.testCar =200;

v1.testVehicle();
c1.testCar();



