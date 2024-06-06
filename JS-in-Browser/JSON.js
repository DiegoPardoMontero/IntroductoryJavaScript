//Conversion de JSON a objeto literal en JavaScript

const jsonStr = '{"greeting":"hello"}'
const aPlainObj = JSON.parse(jsonStr)
aPlainObj.greeting = "hi"
console.log(aPlainObj)

//Conversion de objeto literal en JavaScript a JSON

const data = {
		firstName: "John",
		lastName: "Doe",
		greeting: "Hello"
}
JSON.stringify(data)