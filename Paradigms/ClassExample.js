class Car {
    constructor(color, speed){
        this.color = color;
        this.speed = speed;
    }

    turboOn() {
        console.log("Turbo is on!")
    }
}

var car = new Car()
car.turboOn()
