
const students = [
    { id: 21, name: 'Kazol Biswas' },
    { id: 31, name: 'Tomal' },
    { id: 41, name: 'Rahul Dhor' },
    { id: 51, name: 'Mahbub' }
];
// find element of array object using loop
const output = [];
for (let i = 0; i < students.length; i++) {
    const element = students[i].name;
    output.push(element);
}
console.log('find element of array object using loop = ', output);

//find element of array object using map with arrow function
const names = students.map(s => s.name);
console.log('find element of array object using map = ', names);

//find element of array object using find with arrow function
const biggerIdNames = students.find(s => s.id > 40);
console.log('find element of array object using find = ', biggerIdNames);

//find element of array object using filter with arrow function
const biggers = students.filter(s => s.id > 40);
console.log('find element of array object using filter = ', biggers);