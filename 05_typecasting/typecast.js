//typeconversion
const inputYear = '1991';
console.log(Number(inputYear));
console.log(inputYear + 18);
const newYear = Number(inputYear);
console.log(newYear + 18);

console.log(Number("Jonas"));
console.log(typeof NaN); //invalid number

console.log(String(24), 24);

//typecoercion
console.log('23' - '10' - 3);
console.log('23' + '10' + 3);
console.log('23' + '10' - 3);

console.log('20' * '20');

//5 false values: 0, '', undefined, null, NaN
//falsy value are values that are not exactly false
//truthy values

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));

const money = 0;
if (money){
    console.log("Have some money");
} else {
    console.log("Don't have money");
}