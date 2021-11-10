//
//    Fibonnaci
//
//


//  Recursive  (very bad performance) 
//
//
//
// let yourself = {
//     fibonacci : function(n) {
//         if (n === 0) {
//             return 0;
//         } else if (n === 1) {
//             return 1;
//         } else {
//             return this.fibonacci(n - 1) +
//                 this.fibonacci(n - 2);
//         }
//     }
// };


//  Memoization
//
// THIS SOLUTION doesn't work!!!
//
//
// let yourself = {
//     fibonacci : function(n, memo){

//         memo = memo || {};

//         if(memo[n]) return memo[n];
//         if(n < 1) return 0;
//         if(n = 1) return 1;

//         return memo[n] = this.fibonacci(n - 1, memo) + this.fibonacci(n - 2, memo);
//     }
// }



//  Loop (the fastest)
//
//
let yourself = {
    fibonacci : function(n) {

        var a = 1, b = 0, temp; 

        while(n > 0) {

            temp = a;
            a = a + b;
            b = temp;
            n--;
        }

        return b;

    }
};



console.log(yourself.fibonacci(5));