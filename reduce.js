
const friends = [
    {name : 'mahbub', money: 12},
    {name : 'kazol', money: 25},
    {name : 'tomal', money: 37},
    {name : 'munia', money: 20},
    {name : 'riya', money: 100}
]

const totalSum = friends.reduce((sum, friend)=>{
    console.log(sum, friend);
    return sum+friend.money;
},0)//sum=0
console.log(totalSum);