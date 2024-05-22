const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);
//2 ** 3 means 2 to the power of 3 = 2 * 2 * 2
console.log(ageJonas * 2, ageJonas / 2);
console.log(ageSarah ** 2, ageSarah / 2, ageSarah + ageJonas);

const firstName = 'Kane';
const lastName = 'Winslet';
console.log(firstName + ' ' + lastName);


//AssignmentOperators
let x = 10 + 5; //15
x += 10; //x = x + 10
x *= 4;
x++;
x--;
console.log(x);

//Comparison Operators
console.log(ageJonas > ageSarah); //>, <, <=, >=, ==, ===
const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2019);

// "==" vs "==="
const age = 18;
if (age == '18'){
    console.log("loose equality");
}
if (age === '18'){
    console.log("strict equality");
}

const number = Number(prompt("What is your favourite number?"));
console.log(number);

if (number === 23){
    console.log('cool!');
} else if (!number){
    console.log('Other than number');
} else {
    console.log('loose!')
}
