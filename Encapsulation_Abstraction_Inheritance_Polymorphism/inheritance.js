
// Inheritance

// Process where one class acquires properties (methods and fields) from another class
// 
// Parent -> child
// Super -> sub
// Base -> derived


// Parent Class
class Car {

    setName(name){
        this.name = name;
    }

    startEngine(){
        console.log('Engine started for '+ this.name);
    }

    stopEngine(){
        console.log('Engine stopped for '+ this.name);
    }
}

// Child class. And we have to use extends key word following with parent class ( Car )
class Mazda extends Car{

    topSpeed(speed){ 
        console.log('Top speed for ' + this.name + ' is ' + speed)
    }
}

let myCar = new Mazda();
myCar.setName('CX-50'); // Method from Parent class
myCar.topSpeed(200); 

