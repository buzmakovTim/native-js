
//  Singleton Pattern


//  In software engineering, the singleton pattern is a software design pattern 
//  that restricts the instantiation of a class to one "single" instance. This 
//  is useful when exactly one object is needed to coordinate actions across 
//  the system. The term comes from the mathematical concept of a singleton

//  Use the Singleton pattern when a class in your program should have just a 
//  single instance available to all clients; for example, a single database object 
//  shared by different parts of the program. The Singleton pattern disables all 
//  other means of creating objects of a class except for the special creation 
//  method

// jQuery  itself is a singleton

// Because of singleton involve a global instance, many people dont like them

// There are many ways to create a singleton


let mySingleton = (function() {

    //Instance stores a reference to the Singleton
    let instance;
    function init(){
        // Singleton
        // Private Methods and variables
        function privateMethod(){
            console.log('I am private')
        }
        let privateVariable = 'I am also private';
        let privateRandomNumber = Math.random();
        return {
            // Public methods and variables
            publicMethod : function() {
                console.log('The public can see me!')

                //calling Private Method
                console.log('Accessing Private method')
                privateMethod();
            },
            publicProperty : 'I am also public',
            getRandomNumber : function() {
                return privateRandomNumber;
            }
        };
    };
    return{
        // Get the Singleton instance if one exists
        // or create one if it doesn't
        getInstance : function() {
            if(!instance){
                instance = init()
            }
            return instance
        }
    };
})();

// two instances of mySingleton  they are exact the SAME
let singleA = mySingleton.getInstance(); // one instance
let singleB = mySingleton.getInstance(); // another instance

singleA.publicMethod();
console.log(singleA.publicProperty);


console.log(singleA.getRandomNumber());
console.log(singleB.getRandomNumber());

console.log(singleA.getRandomNumber() === singleB.getRandomNumber());