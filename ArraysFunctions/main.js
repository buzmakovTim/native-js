console.log('Arrays methods practicing!');

const companies = [
    {name: "Company one", category: "Finance", start: 1987, end: 2000},
    {name: "Company two", category: "Retail", start: 1950, end: 2004},
    {name: "Company three", category: "Audio", start: 1947, end: 2009},
    {name: "Company four", category: "Technology", start: 1990, end: 2001},
    {name: "Company five", category: "Auto", start: 1984, end: 2011},
    {name: "Company six", category: "Retail", start: 2001, end: 2000},
    {name: "Company seven", category: "Finance", start: 1982, end: 2031},
    {name: "Company eight", category: "Technology", start: 1967, end: 2021},
];

const ages = [23, 43, 23, 13, 15, 14, 54, 33, 54, 65, 78, 22, 31, 19, 18, 17];



let canDrink = [];


// One Way
for(let i = 0; i < ages.length; i++){
    if(ages[i] >= 21){
        canDrink.push(ages[i]);
    }
}
console.log(canDrink);

// Another way same thing
let canDrink2 = ages.filter(function(age) {
    if(age >= 21) {
        return true;
    }
});
console.log(canDrink2);


//Another ways the same thing
let canDrink3 = ages.filter(age => age >= 21);
console.log(canDrink3);

//
//
//
//
//Filter retail companies
const retailCompanies = companies.filter(function(company){
    if(company.category === 'Retail'){
        return true
    }
})

console.log(retailCompanies);

//Another way
const retailCompanies2 = companies.filter(company => company.category == 'Retail');

console.log(retailCompanies2);


//Get 80's companies
const eightysCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));
console.log(eightysCompanies);



// Sort ages
// Using MAP

const unsortedAges = ages.map((age) => age);

// Sort
ages.sort((a, b) => (a > b ? 1 : -1));

console.log(unsortedAges);
//console.log(sortedAges);

console.log(ages);

// Sort function
//



//
// Age SUM
//

//let ageSum = 0;
//for(let i = 0; i < ages.lenght; i++ ){
//    ageSum += ages[i];
//}

//const ageSum = ages.reduce(function(total, age) {
//    return total + age;
//}, 0)

const ageSum = ages.reduce((total, age) => total + age, 0);
console.log(ageSum);


// find method
let arrayNumbers = []
let arrayNumbers2 = []

//console.log(arrayNumbers)
//console.log(arrayNumbers.filter(n => n === 5));

for(let i = 0; i < 10; i++){

    let randomN = Math.floor(Math.random(1)*100);

    arrayNumbers.push(randomN)
    arrayNumbers2.push(randomN)
}

console.log(arrayNumbers)


// shift
//
// Remove first element
let arrayColors = ['Yellow', 'Blue', 'Red', 'Black'];

console.log(arrayColors);
// After unshifting
arrayColors.shift()
console.log(arrayColors);


