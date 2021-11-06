console.log('String and methods')

////
let string1 = 'This is string one'
let string2 = 'This is string two'

// charAt() 
//
// Character at the position
console.log(string1.charAt(0))  // Print 'T'

// charCodeAt()
//
// Unicode for the character
console.log(string1.charCodeAt(0))  // Print 84  unicode 

// concat()
//
// Returns new joined string
console.log(string1.concat(string2))  // 'This is string oneThis is string two'
 
// endsWith()
//
// 
console.log(string1.endsWith('e'))  // true
console.log(string1.endsWith('one'))  // true
console.log(string1.endsWith('string'))  // false

// fromCharCode()
//
// We have to use Srting.fromCharCode()
console.log(String.fromCharCode(84)) // prints 'T'

// includes()
//
// Includes
console.log(string1.includes('stdr')) // false
console.log(string1.includes('str')) // true
console.log(string1.includes('String')) // false  case sensetive
console.log(string1.includes('string')) // true

// indexOf()
//
// Index of the the char starts
console.log(string1.indexOf('is')) // prints 2
console.log(string1.indexOf('string')) // prints 8

// lastIndexOf()
//
// Return last index of specify string
console.log(string1.lastIndexOf('is')) // prints 5  // as first 'is' skipped second 'is' start at index 5

// match()
//
// using regular expression
console.log(string1.match(/is/g));  // ['is', 'is']  

// repeat()
//
// Repeat string N times
console.log(string1.repeat(3)) // This is string oneThis is string oneThis is string one

// replace()
//
// Return new string with replacing specified
console.log(string1.replace(/is/g, "IS")) // ThIS IS string one    // were using regular expression

// search()
//
// return index starting position
console.log(string1.search('is')) // printed 2 

// slice()
//
// start and end index that what will be returned
console.log(string1.slice(2, 4)) // prints 'is'

// split()
//
// spring string to the array
console.log(string1.split(' ')) // ['This', 'is', 'string', 'one']

// startsWith()
//
// return true false 
console.log(string1.startsWith('is')) // false
console.log(string1.startsWith('This')) // true

// substr()
//
// start from index and number of chars
console.log(string1.substr(0, 4)) // prints 'This'

// substring()
//
// start and end index same as slice
console.log(string1.substring(2, 4)) // 'is'

// toLowerCase()
//
// all chars will be lower case
console.log(string1.toLowerCase()) // this is string one

// toUpperCase()
//
// all chars will be upper case
console.log(string1.toUpperCase()) // THIS IS STRING ONE

// trim()
//
// remove white spaces at the beginning and ant the end
let string3 = '      Hello!      '
console.log(string3.trim()); // 'Hello!'

