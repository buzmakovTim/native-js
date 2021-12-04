console.log("Vacuum Robot")

let A = ["...x..", "....xx", "..x..."] // Should return 6
let B = ["....x..", "x......", ".....x.", "......."] // Should return 16
let C = ["...x.", ".x..x", "x...x", "..x.."] // Should return 9

//  0 1 2 . 4 5
//  0 1 2 3 . .
//  0 1 . 3 4 5

let cleaning = (array) => {

    let cleanedFloor = array.map( a => a )

    console.log(cleanedFloor)

    let result = 0

    return result
}

console.log("Robot moved - " + cleaning(A) + " times.")