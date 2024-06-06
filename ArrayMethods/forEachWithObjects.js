//A pesar de que la mayoría de ejemplos incluyen objetos,
//puede usarse sin problema definiendo clases también.
//Ejemplo 3: Usando el prototipo
function Counter() {
    this.sum = 0;
    this.count = 0;
}
Counter.prototype.add = function (array) {
array.forEach(function (entry) {
    this.sum += entry;
    ++this.count;
}, this);
// ^---- Note
};

var obj = new Counter();
obj.add([2, 5, 9]);
console.log(counter.sum);   // 16
console.log(counter.count); // 3
  

//Ejemplo 4: Directamente en el objeto
const counter = {
    sum: 0,
    count: 0,
    add: function(array) {
        array.forEach((entry) => {
            this.sum += entry;
            ++this.count;
        });
    }
};

counter.add([2, 5, 9]);
console.log(counter.sum);   // 16
console.log(counter.count); // 3


//Ejemplo 5: Usando arrow functions
const counter2 = {
    sum: 0,
    count: 0,
    add: function(array) {
        array.forEach((entry) => {
            this.sum += entry;
            ++this.count;
        });
    }
};

counter.add([2, 5, 9]);
console.log(counter2.sum);   // 16
console.log(counter2.count); // 3
