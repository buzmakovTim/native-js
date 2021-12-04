
let matrix = [
    [112, 42, 83, 119 ],
    [ 56, 125, 56, 49 ],
    [ 15, 78, 101, 43 ],
    [ 62, 98, 114, 108]
    ]

// let matrix = [
//     [112, 42, 83, 119, 54, 33 ],
//     [ 56, 125, 56, 49, 124, 65 ],
//     [ 15, 78, 101, 43, 654, 56 ],
//     [ 62, 98, 114, 108, 42, 333],
//     [ 62, 345, 114, 158, 444, 534],
//     [ 62, 345, 114, 158, 444, 534]
//     ]


    // let matrix = [
    //     [112, 42 ],
    //     [ 56, 125]
    //     ]
//   <!-- Answer 414 -->
//console.log(matrix)

function flippingMatrix(matrix) {
    let result = 0;
    
    
    function maxSum(){
        let sum = 0
        let quadrant = (matrix.length)/2
        
        for(let row = 0; row < quadrant; row++){
            for(let col = 0; col < quadrant; col++){
                sum = sum + matrix[row][col]
            }
        }
        return sum
    }
    
    console.log(matrix)
    
    // Reverse Row
    function reverceRow(rowN) {
        
        let tempRow = []
        for(let i = matrix.length-1; i >= 0; i--){
            tempRow.push(matrix[rowN][i])
        }
        matrix[rowN] = tempRow
    }
    // Reverse Col
    function reverceCol(colN) {
        
        let tempCol = []
        for(let i = matrix.length-1; i >= 0; i--){
            tempCol.push(matrix[i][colN])
        }
        for(let i = 0; i < matrix.length; i++){
            matrix[i][colN] = tempCol[i]
        }
    }
    
    
    reverceRow(0)
    reverceCol(0)
    
    //console.log(matrix)
    result = maxSum() 
    
    let i = 0
    while(i <= Math.pow(Math.pow(matrix.length, 2), 4)){

        // for(let row = 0; row < 4; row++){
        //     reverceRow(row)
        //     for(let col = 0; col < 4; col++){
        //         reverceCol(col)

        //         if(result < maxSum()){
        //             result = maxSum()
        //         }
        //     }    
        // }
        // for(let col = 0; col < 4; col++){
        //     reverceCol(col)
        //     for(let row = 0; row < 4; row++){
        //         reverceRow(row)
        //         if(result < maxSum()){
        //             result = maxSum()
        //         }
        //     }    
        // }




        let row = Math.floor(Math.random() * matrix.length)
        let col = Math.floor(Math.random() * matrix.length)
        reverceRow(row)
        reverceCol(col)
        if(result < maxSum()){
            result = maxSum()
        }
        //console.log(maxSum())

        
        i++
    }
    
    
    //console.log(result)
    return result

}


console.log("Max sum were found is: " + flippingMatrix(matrix))