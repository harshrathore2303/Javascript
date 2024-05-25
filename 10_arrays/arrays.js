const friend1 = 'Micheal';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const year = new Array(1991, 1948, 1555, 6666);
console.log(year);

console.log(year[0]);

console.log(year.length);
console.log(year[year.length - 1]);

friends[0] = 'Jay';
console.log(friends);

const jonas = [year, friends];

console.log(jonas.length);
console.log(jonas);

//exercise
const calcAge = function (birthYear){
    return 2037 - birthYear;
}
console.log(calcAge(year));

//Methods
const newFriends = ['Michael', 'Steven', 'Peter', 'Aarav'];
//push adds element in the end of the array
newFriends.push('Jay');
//to add an element in the beginning of the array
newFriends.unshift('Aditi');
//pop to remove and return the last element of the array
newFriends.pop();
//to remove and return first element
newFriends.shift();
console.log(newFriends, newFriends.length);
console.log(newFriends.indexOf('Peter'));
console.log(newFriends.indexOf('Aarohi'));
console.log(newFriends.includes('Steven'));
console.log(newFriends.includes('Aarohi'));


