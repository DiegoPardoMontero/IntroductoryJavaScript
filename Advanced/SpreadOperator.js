//Ejemplo 1: Agregando más datos a un arreglo

const fruits = ['apple', 'banana', 'pear'];
const moreFruits = [...fruits, 'grape', 'orange'];
console.log(moreFruits); // ['apple', 'banana', 'pear', 'grape', 'orange']

//Ejemplo 2: Actualizar o combinar propiedades de objetos
const person = { name: 'Alice', age: 25 };
const updatedPerson = { ...person, age: 26 };
console.log(updatedPerson); // { name: 'Alice', age: 26 }
