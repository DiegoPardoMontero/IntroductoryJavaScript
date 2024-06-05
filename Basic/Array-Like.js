//Hacer un for loop en un string:

var veggies = ['onion', 'parsley', 'carrot']

console.log(veggies.length);

for(var i = 0; i < veggies.length; i++){
		for(var j = 0; j < veggies[i].length; j++){
				console.log(veggies[i][j]);
		}
}