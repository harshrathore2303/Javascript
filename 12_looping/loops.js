console.log('Lifting weigths repetition 1');
console.log('Lifting weigths repetition 2');
console.log('Lifting weigths repetition 3');
console.log('Lifting weigths repetition 4');
console.log('Lifting weigths repetition 5');
console.log('Lifting weigths repetition 6');
console.log('Lifting weigths repetition 7');
console.log('Lifting weigths repetition 8');
console.log('Lifting weigths repetition 9');
console.log('Lifting weigths repetition 10');

//for loop
for (let rep = 1; rep <= 10; rep++){
    console.log(`Lifting weights repetition ${rep}`);
}

//looping in arrays
const arr = ['Jonas', 12, 'pointer', '2024'];

for (let i = 0; i < arr.length; i++){
    console.log(arr[i], typeof arr[i]);
}

const year = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < year.length; i++){
    ages.push(2037 - year[i]);
}
console.log(ages);

//continue and break
for (let i = 0; i < arr.length; i++){
    if (typeof arr[i] != 'string'){
        // continue;
        break;
    }
    console.log(arr[i], typeof arr[i]);
}

//while loop
let rep = 1;
while (rep <= 10){
    console.log(`Lifting weights repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);