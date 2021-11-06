console.log('var let and const in JavaScript');

//
// var  -  function scope
//
// let and const  -  block scope 
//


if(true) {
    var varVariable = 'This is true';
} 

console.log(varVariable);    // Display This is true

if(true){
    let letVariable = 'This is true';
}

//console.log(letVariable);    // ERROR! letVariable not defined




//////////////////////////////////////////////////////
//
// var we can rediclare but let and const we cannot

var a = 10;
var a = 20; 

console.log(a);  // print out 20


let b = 10; 
//let b = 20;   // ERROR!!!  Uncaught SyntaxError: Identifier 'b' has already been declared


/////////////////////////////////////////////////////
//
// var can be used even before we declare the variable

console.log(c)  // undefined

var c = 'true'

console.log(c)  // true


//console.log(d)  // ReferenceError: Cannot access 'd' before initialization

let d = 'true'

console.log(d)  // true



/////////////////////////////////////////////////
//
//
//
//    CONST

const constVariable = 'true'

console.log(constVariable) // true

// constVariable = 'false'  ERROR can't do it

// We can not reassign CONST variable, but in case if it's object we can change the value of propertis

const person = {name: 'Tim', lastName: 'Buzmakov'}

console.log(person)  // {name: 'Tim', lastName: 'Buzmakov'}

person.name = 'Timofey'

console.log(person)  // {name: 'Timofey', lastName: 'Buzmakov'}


