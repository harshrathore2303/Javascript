//Introduction to Objects
const jonnyArrays = [
    'Jonas',
    'Batham',
    232-5,
    'teacher',
    ['Michael', 'Steven', 'Peter']
];

//object literal syntax, key-value-pairs
const jonny = {
    firstName : "Jonny",
    lastName : "Batham",
    age : 20,
    job : 'Student',
    friends : ['Harsh', 'Rathi', 'Chinku'],
}
console.log(jonny);
// jonny.job = 'teacher';
console.log(jonny["friends"]);
console.log(jonny.job);
const job = 'job';
console.log(jonny[job]);

//objects methods
const asha = {
    firstName : 'Asha',
    lastName : 'Bhosle',
    birthYear : 1941,
    job : 'singer',
    friends : ['Mukesh', 'Tulsi', 'Aastha', 'Kishore Kumar'],
    hasDriversLicense : true,
    calcAge : function () {
        console.log(this);
        return 2037 - this.birthYear;
    }
}

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

console.log(asha.calcAge());
console.log(asha['calcAge']());