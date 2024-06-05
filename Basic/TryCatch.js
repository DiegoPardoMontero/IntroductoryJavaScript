function addTwoNums(a, b){
    try {
        if((typeof(a) != 'number') || (typeof(b) != 'number')){
            throw ReferenceError("An argument is not a number!")
        }
        console.log(a + b)
    } catch (error) {
        console.log("Catched Error!")
        console.log(error)
    }
}

addTwoNums('5', 5)