// reference type
// javascript don't pass 'by reference'!
// But, javascript do pass 'reference' value itself
let object1 = { value: 10 };
let object2 = object1;
let object3 = { value: 10 };

let flight = "LH234";
const dahee = {
    name: "dahee kim",
    passport: 12312314325234,
};

const checkIn = function (flightNum, passenger) {
    flightNum = "LH999"; // copy of flight
    passenger.name = "Ms. " + passenger.name;

    if (passenger.passport === 12312314325234) {
        alert("Check in");
    } else {
        alert("Wrong passport");
    }
};
checkIn(flight, dahee);
console.log(flight);
console.log(dahee);
// context (where we are with the reference) vs scope
function func() {
    let a = 4;
    console.log(this); // what object is inside of?
}
// func();
const func2 = {
    a: function insideFunc() {
        console.log(this);
    },
};
console.log(func2.a());
// instantiation
class Player {
    constructor(name, type) {
        this.name = name;
        this.type = type;
        console.log("plyaer", this);
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    }
}

class Wizard extends Player {
    constructor(name, type, power) {
        super(name, type);
        this.power = power;
        console.log("wizard", this);
    }
    play() {
        console.log(`WEEEEEE I'm a ${this.type}`);
    }
}
const wizard1 = new Wizard("dahee", "healer", "water");
const wizard2 = new Wizard("shawn", "dark magic", "fire");

// Classical Inheritance
let PlayerClassic = function (name, type) {
    this.name = name;
    this.type = type;
};

PlayerClassic.prototype.introduce = function () {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
};

let classicwizard1 = new PlayerClassic("Shelly", "healer");

classicwizard1.play = function () {
    console.log(`WEEEEEE I'm a ${this.type}`);
};
console.log(classicwizard1);
