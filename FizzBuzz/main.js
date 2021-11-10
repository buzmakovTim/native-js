//
//
//
// FizzBuzz

//  Players generally sit in a circle. The player designated to go first says the number "1", 
//  and the players then count upwards in turn. However, any number divisible by three is 
//  replaced by the word fizz and any number divisible by five by the word buzz. 
//  Numbers divisible by 15 become fizz buzz. A player who hesitates or makes a mistake is 
//  eliminated from the game.

//  For example, a typical round of fizz buzz would start as follows:

//  1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz, 16, 17, Fizz, 19, Buzz, Fizz, 22, 23, Fizz, Buzz, 26, Fizz, 28, 29, Fizz Buzz, 31, 32, Fizz, 34, Buzz, Fizz, ...

let games = {
    fizzBuzz : function(n){

        let i = 1
        while(i <= n){
            if(i % 15 === 0) {
                console.log(' Fizz Buzz ')
            }
            else if (i % 5 === 0){
                console.log(' Buzz ')
            }
            else if (i % 3 === 0){
                console.log(' Fizz ')
            } else {
                console.log(i)
            }
            i++;
        }
    }
}


games.fizzBuzz(85)