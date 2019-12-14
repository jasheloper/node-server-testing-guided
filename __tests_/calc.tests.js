const calculator = require("../calculator.js"); 

let valA = 2; 
let valB = 2; 

// describe block 
describe(' addition    ', () =>  {
test("add numbers", () =>  {
let expectedResult = 4; 
let result = calculator.add(valA, valB); 
expect(result).toBe(expectedResult); 
}); 

///////////////// addt'l 
test('identity'   , () => {
   expect(calculator.add(2,0)).toBe(2)
})
/////////////////

test("sub num", () =>  {
let expected = 0; 
let result = calculator.subtract(valA, valB); 
expect(result).toBe(expected); 
}); 
})


// describe block 

describe('multiply', () =>  {
test("mult num", () =>  {
let expected = 4; 
let result = calculator.multiply(valA, valB); 
expect(result).toBe(expected); 
}); 

test("div num", () =>  {
let expected = 1; 
let result = calculator.divide(valA, valB); 
expect(result).toBe(expected); 
}); 
})


// test('add numbers', () => {
//    let valA = 2;
//    let valB = 2;
//    let expectedResult = 4;
//    let result = calculator.add(valA, valB);

//    expect(result).toBe(expectedResult)
// })
