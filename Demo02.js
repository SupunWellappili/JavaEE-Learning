function Animal(id, name) {
    this.id = id;
    this.name = name;
    this.cry = function () {
        return id + " - " + name + " is a crying";
    }
}

function Cat(id, name) {
Animal.apply(this,arguments);
}

var a = new Animal("a001", "Cat");
var rep = a.cry();
console.log(rep);

var c = new Cat("c001", "kitty");

Cat.prototype = Object.create(Animal.prototype);
var rep2 =c.cry();
console.log(rep2);
