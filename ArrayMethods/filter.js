//Ejemplo 1:

const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]

//Ejemplo 2:

const nums = [0,10,20,30,40,50];
nums.filter( function(num) {
    return num > 20;
})