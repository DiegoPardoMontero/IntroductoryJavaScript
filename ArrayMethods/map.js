//Ejemplo 1:
var numeros = [1, 4, 9];
var raices = numeros.map(Math.sqrt);
// raices tiene [1, 2, 3]
// numeros aún mantiene [1, 4, 9]

//Ejemplo 2:
var kvArray = [
  { clave: 1, valor: 10 },
  { clave: 2, valor: 20 },
  { clave: 3, valor: 30 },
];

var reformattedArray = kvArray.map(function (obj) {
  var rObj = {};
  rObj[obj.clave] = obj.valor;
  return rObj;
});

// reformattedArray es ahora [{1:10}, {2:20}, {3:30}],

// kvArray sigue siendo:
// [{clave:1, valor:10},
//  {clave:2, valor:20},
//  {clave:3, valor: 30}]
