
// Polymorphism
// Poly = many
// Morphy = forms 
//  many forms

class Animal{

    constructor(name){
        this.name = name
    }

    eats(){
        console.log(this.name+ ' eats food');
    }
}

class Alligator extends Animal{

    eats(){
        // super.eats();  // in this case we call eats() from parent class
        console.log(this.name + ' eats fishes')
    }
}


let krokodil = new Alligator('Gena');
krokodil.eats();
