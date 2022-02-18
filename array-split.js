
const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const numsPart = nums.slice(2, 5);
console.log('cut element from index 2 to 5 = ', numsPart);

const removePush = nums.splice(2, 4, 15, 23);
console.log('remove element from index of 2 to 3elemts and push 2 element = ', removePush);
console.log('after remove and push full array = ', nums);

const together = nums.join(",");
console.log(together);