//Ejemplo 1:
const array1 = ['a', 'b', 'c'];

array1.forEach((element) => console.log(element));

//Ejemplo 2:
function logArrayElements(element, index, array) {
  console.log("a[" + index + "] = " + element);
}

// Nótese que se evita el 2° índice ya que no hay ningún elemento en esa posición del array
[2, 5, , 9].forEach(logArrayElements);
// salida:
// a[0] = 2
// a[1] = 5
// a[2] = 9