function Vehicle(model, year) {
    this.model = model;
    this.year = year;
    this.park = function () {
        return this.model + "-" + this.year + " is going to park";
    }
}

function Car(model, year) {
    Vehicle.apply(this,arguments);
}

var v1 = new Vehicle("Benz", 2020);
var res = v1.park();
console.log(res);

/*
Car.prototype = Vehicle.prototype;

var c1 = new Car("Toyoto", 1998);

Vehicle.prototype.testVehicle =100;
Car.prototype.testCar =200;

v1.testVehicle();
c1.testCar();*/

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

var  c1 = new Car("Audi", 2005);
var res2 =c1.park();
console.log(res2);




// above code 2015 edition
/*

class Vehicle{
    constructor(id,name) {
        this.id =id;
        this.name= name;
    }


    park(){
        return this.name+ " - "+this.id+" is a crying"
    }
}


var v =new Vehicle("c001", "Benz");
v.park();
*/



