const addFive = require('./addFive')

test('Returns the number plus 5', () =>{
    expect(addFive(1)).toBe(6);
})