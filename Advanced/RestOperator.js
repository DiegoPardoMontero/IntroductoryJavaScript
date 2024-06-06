//Ejemplo 1: Trabajando con arrays
const [first, second, ...rest] = [10, 20, 30, 40, 50];

console.log(first);  // 10
console.log(second); // 20
console.log(rest);   // [30, 40, 50]

//Ejemplo 2: Trabajando con objetos
const { a, b, ...rest2} = { a: 1, b: 2, c: 3, d: 4 };

console.log(a);    // 1
console.log(b);    // 2
console.log(rest); // { c: 3, d: 4 }