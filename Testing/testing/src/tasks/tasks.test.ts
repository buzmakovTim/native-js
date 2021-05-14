import { calculator, rest, sum } from "./tasks"

// First function to test
//
// start from 'test' keyword
// and two parameters 1: name  2: function that gonna run (usually we pass a arrow func)  
test("Sum of two number", () => {

    //1. First test data 
    const a: number = 10
    const b: number = 8

    //2. Run Function we wanna test
    const result = sum(a,b)

    //3. Expected result
    expect(result).toBe(18)

})


// or same test but short version
// test("Sum of two number", () => {
//     //3. Expected result
//     expect(sum(10, 8)).toBe(18)

// })

//////////////////////////////////////////////////////////////////////////////////////////
//
// Second function to test
//
test('sum of several numbers', ()=> {

    expect(rest(1, 3)).toBe(4)
    expect(rest(1, 3, 10)).toBe(14)
    expect(rest(1, 3, 10, 30)).toBe(44)
})



//////////////////////////////////////////////////////////////////////////////////////////
//
// Calculator testing
//
test('calculator', ()=> {

    expect(calculator(1, 3, { type: 'sum'})).toBe(4)
    expect(calculator(1, 3, { type: 'mult'})).toBe(3)
    expect(calculator(4, 2, { type: 'div'})).toBe(2)
    expect(calculator(5, 3, { type: 'sub'})).toBe(2)
    
})