// কোন একটা ফাংশন থেকে অন্য কোন একটা ফাংশকে কল করি অথবা রিটার্ন করি তাহলে সে একটা ক্লোস একভায়োর্নমেন্ট তৈরি করে, তারপর ভিতরে যে ফাংশনটা রিটার্ন বা কল করতেছি সে বাইরের কোনেকটা ভেরিএবলকে এক্সেস করে নিজস্ব একটা একভায়োর্নমেন্ট তৈরি করে।

function stopWatch(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}

const clock1 = stopWatch();
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());

const clock2 = stopWatch();
console.log(clock2());
console.log(clock2());
console.log(clock1());