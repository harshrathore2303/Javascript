function logger() {
    console.log('My name is Jonas');
}

logger();   //invoking/calling/running function
logger();
logger();

// function name(parameter){}
function fruitProcessor(apples, oranges){
    console.log(apples, oranges);
    const juice = `juice with ${apples} and ${oranges} oranges`
    return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const num = Number('23');

function printNumber(i) {
    if (i == 5){
        return;
    }
    console.log(i);
    printNumber(i + 1)
}
printNumber(0);

//function declaration
function calcAge1(birthYear){
    return 2037 - birthYear;
}
const age1 = calcAge1(1991);

//function expression
const calcAge2 = function (birthYear){
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);

//Arrow function
const calcAge3 = birthyear => 2037 - birthyear;
const age3 = calcAge3(1991);
console.log(age3);