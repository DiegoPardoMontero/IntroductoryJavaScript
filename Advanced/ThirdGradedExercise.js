function logDairy(){
    var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']

    for (item of dairy) {
        console.log(item);
    }
}


function birdCan(){
    const animal = {

        canJump: true
        
    };
        
    const bird = Object.create(animal);
        
    bird.canFly = true;
        
    bird.hasFeathers = true;

    for (prop of Object.keys(bird)) {
        console.log(`${prop}: ${bird[prop]}`)
    }
}

function animalCan(){
    const animal = {

        canJump: true
        
    };
        
    const bird = Object.create(animal);
        
    bird.canFly = true;
        
    bird.hasFeathers = true;

    for (prop in bird) {
        console.log(`${prop}: ${bird[prop]}`)
    }
}


logDairy()
birdCan()
animalCan()