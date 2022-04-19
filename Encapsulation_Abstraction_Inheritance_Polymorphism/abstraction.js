
// Abstraction Example!

// An abstraction is a way of hiding the implementation details and showing only the functionality
// to the users.

function Employee(name, age, baseSalary){
    this.name = name;
    this.age = age;
    this.baseSalary = baseSalary;
    

    this.monthlyBonus1 = 1000; // this can be access outside and changed
    let monthlyBonus = 1000; // can not bee accessible outside

    
    // this function can be accessed outside and we don't want this
    this.calculateFinalSalary1 = function(){
        let finalSalary = this.baseSalary + this.monthlyBonus1;
        console.log('Final Salary is: ' + finalSalary);
    }
    
    let calculateFinalSalary = function(){
        let finalSalary = baseSalary + monthlyBonus;
        console.log('Final Salary is: ' + finalSalary);
    }
    
    this.getEmpDetails = function(){
        console.log('Name: ' + this.name + ' | Age: ' + this.age);
        calculateFinalSalary();
    }
}

let emp1 = new Employee('Tim', 35, 2000);

emp1.monthlyBonus1 = 10000; // we dont went this to be happened
emp1.calculateFinalSalary1(); // we dont went this to be happened

emp1.getEmpDetails();

