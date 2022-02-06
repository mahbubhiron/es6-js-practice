
const sadd = function(x,y){
    return x*y;
}
console.log('simple function sum '+sadd(2,5));

// arrow function in one line
const add = (x,y) => x+y;//function add(x,y){return x+y}
console.log('arrow function sum '+add(10,15));

// arrow function multiple work
const doMath = (x,y) =>{
    const sum = x+y;
    const diff = x-y;
    return sum*diff;
}
console.log('arrow function multiplication '+doMath(7,5));
