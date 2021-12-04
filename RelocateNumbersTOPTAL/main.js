let A = [10, -10, -1, 1, 10]  // Should return 1
let B = [-1, -1, -1, 1, 1, 1, 1]  // Should return 3
let C = [5, -2, -3, 1]  // Should return 0

let result = 0

let shiftOneElementToTheEnd = (array, index) => {
    //console.log(array)
    let temp = array[index]
    array.splice(index, 1)
    array.push(temp)
    result++
    //console.log(array)
}


let numOfRelocations = (array) => {
    result = 0

    let i = 0
    let sum = 0

    while(i < array.length){

        sum = sum + array[i]
        //console.log("Sum - " + sum)

        if(sum < 0){
            sum = sum - array[i]
            //console.log("Sum adjusted - " + sum)
            shiftOneElementToTheEnd(array, i)
            i--
        }
        i++
    }

    console.log("Number of relocations - " + result)

    
}


numOfRelocations(A)
numOfRelocations(B)
numOfRelocations(C)

