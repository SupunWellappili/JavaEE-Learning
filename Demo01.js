function Vehicle(model, year) {
    this.model = model;
    this.year = year;
    this.park = function () {
        return this.model + "-" + this.year + " is going to park";
    }
}


var v1 = new Vehicle("Benz", "2020");
var res = v1.park();
console.log(res);

var v2 = new Vehicle("Toyota", 2019);
var res2 = v2.park();
console.log(res2);