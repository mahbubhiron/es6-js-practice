// destructure বড় কোন অবজেকট বা এরে থেকে একটা বা দুইটা ইলিমেনট কে কোন একটা ভেরিএবলে রাখার সর্টকার্ট উপায়

// object destructure
const person = { name: 'mahbub', age: 26, job: 'Student', gfName: 'None', address: 'Mirpur-2',phone: '01914679736', friends:['masud','rajib','tomal','kazol']};

const {name, phone, address, gfName, friends} = person;
// const [f,...r] = person.friends;
// console.log(f,r);

// const name = person.name;
// const phone = person.phone;

console.log('object destructure = ',name, phone, address, gfName, friends);

// array destructure
const friend = ['masud', 'rajib','alamin','tomal','kazol'];
const [firstFriend,...remainFriend] = friend;
console.log('array destructure = ',firstFriend,remainFriend);

const complexObject = {
    name:'new',
    info:{
        address: 'uttara',
        leader: 'tiger'
    }
}
const {leader} = complexObject.info;
console.log('call object inside object = ',leader);