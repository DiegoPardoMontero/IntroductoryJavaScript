var bird = {
    hasWings: true,
    canFly: true,
    hasFeathers: true
}

var eagle1 = Object.create(bird)
console.log("Eagle1: ", eagle1)

console.log(eagle1.hasWings);
console.log(eagle1.canFly);
console.log(eagle1.hasFeathers);

var penguin1 = Object.create(bird)
penguin1.canFly = false;
console.log(penguin1)