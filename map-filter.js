//simple Array square
const number = [3, 4, 5, 6, 7, 8];
const output = [];

for (let i = 0; i < number.length; i++) {
    const element = number[i];
    const result = element * element;
    output.push(result);
}
console.log('Array square = ', output);

//Array square using map
const result = number.map(function (element) {
    return element * element;
});
console.log('Array square using map = ', result);

// array square using map with arrow function
const square = number.map(element => element * element);
console.log('array square using map with arrow function = ', square);

// array filter with arrow function
const filter = number.filter(x => x > 5);
console.log(filter);

// array find with arrow function
const find = number.find(x => x > 5);
console.log(find);