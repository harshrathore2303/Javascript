//exercise #1
console.log('9' + '5');
console.log('9' - '5');
console.log('123' < 57);

//exercise #2
const markMass = 78;
const markHeight = 1.69; 
const markBmi = markMass / (markHeight ** 2);
const johnMass = 92;
const johnHeight = 1.95;
const johnBmi = johnMass / (johnHeight ** 2);
// const markHigherBMI = johnBmi < markBmi;
console.log(markBmi); 
console.log(johnBmi);
// console.log(markHigherBMI);

if (markBmi > johnBmi){
    console.log("Mark's BMI is higher than John's!");
} else {
    console.log("John's BMI is higher than Mark's!");
}

//exercise #3
const dolphins = [97, 112, 101];
const koalas = [109, 95, 123];
let avgScore1 = 0;
let avgScore2 = 0;

for (let i = 0; i < 3; i++){
    avgScore1 += dolphins[i];
    avgScore2 += koalas[i];
}

avgScore1 = avgScore1 / 3;
avgScore2 = avgScore2 / 3;

if (avgScore1 > avgScore2 && avgScore1 >= 100){
    console.log("Dolphins wins");
} else if (avgScore1 < avgScore2 && avgScore2 >= 100){
    console.log("Koalas wins")
} else {
    console.log("No winner");
}

//exercise #4
