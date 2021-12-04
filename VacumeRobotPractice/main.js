console.log("Vacuum Robot")

let A = ["...x..", "....xx", "..x..."] // Should return 6
let B = ["....x..", "x......", ".....x.", "......."] // Should return 16
let C = ["...x.", ".x..x", "x...x", "..x.."] // Should return 9

//  0 1 2 . 4 5
//  0 1 2 3 . .
//  0 1 . 3 4 5

let steps = 1
let robotMode = "move"  // "move" | "turn"
let robotDirection =  "right"  // "up" | "right" | "left" | "down"
let robotPosition = [0, 0]
let canTurnMore = 0
 
//let robotNextPosition = [0, 0]
let cleanedFloor = []

let cleaning = (array) => {

    cleanedFloor = array.map( a => a )

    // Cleaning First sport start
    cleaned = cleanedFloor[0] // Row should be always 0
    cleaned = cleaned.split('');
    cleaned[0] = 'c'; // Row should be always 1
    cleaned = cleaned.join('');
    cleanedFloor[0] = cleaned  // Row should be always 0
    // Cleaning First sport end

    let RobotNextPosition = () => {

        switch(robotDirection){
            case 'right':
                return [robotPosition[0], (robotPosition[1] + 1)]
            case 'down':
                return [(robotPosition[0] + 1), robotPosition[1]]
            case 'left':
                return [robotPosition[0], (robotPosition[1] - 1)]
            case 'up':
                return [(robotPosition[0] - 1), robotPosition[1]]
 
        default:
            break

        }

        return robotNextPosition
    }

    let robotMoving = (mode) => {

        robotMode = mode
        
        switch(robotMode) {
            case "turn":
                canTurnMore++
                if(robotDirection == "right"){
                    robotDirection = "down"
                }
                else if(robotDirection == "down"){
                    robotDirection = "left"
                }
                else if(robotDirection == "left"){
                    robotDirection = "up"
                }
                else if(robotDirection == "up"){
                    robotDirection = "right"
                }
                break;
            case "move":
                canTurnMore = 0
                if(robotDirection == "right"){
                    steps++
                    robotPosition[1] += 1
                    
                        cleaned = cleanedFloor[robotPosition[0]] // Row should be always 0
                        cleaned = cleaned.split('');
                        cleaned[robotPosition[1]] = 'c'; // Row should be always 1
                        cleaned = cleaned.join('');

                    cleanedFloor[robotPosition[0]] = cleaned  // Row should be always 0
                    
                }
                else if(robotDirection == "down"){
                    steps++
                    robotPosition[0] += 1

                        cleaned = cleanedFloor[robotPosition[0]] // Row should be always 0
                        console.log("Row we are cleaning now " + cleaned)
                        cleaned = cleaned.split('');
                        cleaned[robotPosition[1]] = 'c'; // Row should be always 1
                        cleaned = cleaned.join('');

                    cleanedFloor[robotPosition[0]] = cleaned  // Row should be always 0
                }
                else if(robotDirection == "left"){
                    steps++
                    robotPosition[1] -= 1

                        cleaned = cleanedFloor[robotPosition[0]] // Row should be always 0
                        cleaned = cleaned.split('');
                        cleaned[robotPosition[1]] = 'c'; // Row should be always 1
                        cleaned = cleaned.join('');

                    cleanedFloor[robotPosition[0]] = cleaned  // Row should be always 0
                }
                else if(robotDirection == "up"){
                    steps++
                    robotPosition[0] -= 1

                        cleaned = cleanedFloor[robotPosition[1]] // Row should be always 0
                        cleaned = cleaned.split('');
                        cleaned[robotPosition[1]] = 'c'; // Row should be always 1
                        cleaned = cleaned.join('');

                    cleanedFloor[robotPosition[0]] = cleaned  // Row should be always 0
                }
                break;
            default:
                break;
        }
    
    
        
    
        
    }

    console.log(cleanedFloor)
    

let i = 0
while(true){

        console.log("Going ----------------------------- " + robotDirection)
        console.log("Robot next position: " + RobotNextPosition())
        
  
        let ceil = 0
        let floor = array.length - 1
        let leftWall = 0
        let rightWall = array[0].length - 1 

        
        let nextPositionRow = RobotNextPosition()[0]
        let nextPositionCol = RobotNextPosition()[1]
        
        console.log("Next Position ROW: " + nextPositionRow)
        console.log("Next Position COL: " + nextPositionCol)

        if(canTurnMore < 2) {

            // lets turn if Next position will be out of the floor or blocked or cleaned
            if(nextPositionRow <= floor && nextPositionRow >= ceil && nextPositionCol <= rightWall && nextPositionCol >= leftWall) {

                        if(array[nextPositionRow][nextPositionCol] == "x" || cleanedFloor[nextPositionRow][nextPositionCol] == "c"){
                            robotMoving("turn")
                        } else {
                            robotMoving("move")
                        } 
                        
            } else { 
                robotMoving("turn")
            }    
              
        } else {
            // we can't turn any more!
            console.log("We turned: " + canTurnMore + ". Cant turn any more!!!")
            break
        }
            
        i++
     }

    return steps
}



console.log("Robot moved: " + cleaning(B) + " times.")


