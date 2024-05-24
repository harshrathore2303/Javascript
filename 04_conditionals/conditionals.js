const age = 19;
const isOldEnough = age >= 18;
if (isOldEnough){
    console.log(true);
} else {
    console.log(false);
}

let century = 0;
const birthYear = 2000;
if (birthYear > 2000){
    century = 1;
} else {
    century = 2;
}
console.log(century);

// ternaryOperator
const newAge = 23;
newAge >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');
const drink = newAge >= 18 ? 'wine' : 'water';
console.log(drink);
