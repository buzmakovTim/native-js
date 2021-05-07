
// We gonna lear sorting on this lesson.


const array = [777,23,12,43,32,65,82,21,0,99]

// Sending 

for(let j=0; j < array.length - 1; j++){
    for(let i=0; i<array.length; i++){

        if(array[i] > array[i + 1]) {
            [array[i], array[i+1]] = [array[i+1], array[i]]
            //let temp = array[i + 1]
            //array[i + 1] = array[i]
            //array[i] = temp
        }
}    
}
console.log(array)


const names = ["Alex", "Bob", "Kevin", 2000]

names.sort()
console.log(names)

const numbers = [100, 200, 1000, 333, 3002, 9]
console.log(numbers.sort())


// sort -> compareFunction -> a
// a <= 0 nothing to change
// a > 0 needs to be changed


function comp(a, b) {
    if(a <= b){
        return -1
    } else {
        return 1
    }
}

// or

const shortCom = (a, b) => a - b;

console.log(numbers.sort(shortCom))



const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
    {
        name: "Helge",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 121
    },
];

// console.log(students
//     .sort((a, b) => b.scores - a.scores)
//     .reverse()
//     .pop())

console.log(students.sort((a, b) => a.name < b.name ? -1 : 1))
