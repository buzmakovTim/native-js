import React from 'react';

// Function for testing
// :number at the end is a return type
export function sum(a: number, b: number):number {
    return a + b
}
export function mult(a: number, b: number):number {
    return a * b
}
export function sub(a: number, b: number):number {
    return a - b
}
export function div(a: number, b: number):number {
    return a / b
}


// Function for testing
// ... will add all argument in the collection 
// and we can add as many numbers as we want as a parameters
export function rest(...numbers: Array<number>) {
    return numbers.reduce((acc, el) => acc+el, 0)
}


//
// Function Calculator
//
export type ActionType = {
    type: 'sum'|'mult'|'div'|'sub'
}

export function calculator(a: number, b:number, action: ActionType) {

    switch(action.type) {

        case 'sum':
            return a + b
        case 'sub':
            return a - b
        case 'div':
            return a / b
        case 'mult':
            return a * b
        
        default: 
            return new Error('Unknown action')
    }



} 