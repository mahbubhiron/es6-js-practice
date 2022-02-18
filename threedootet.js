
const age = ['25','22','28'];
const age2 = ['20','21','23'];
const age3 = ['30','29','27'];
const allAge = age.concat(age2).concat(15).concat(age3);
console.log('simple age concat '+allAge);
// concat all ages inside array
const allAge2 = [age,age2,5,age3];
console.log('simple age concat with inside array '+allAge2);
//concat all ages inside array with es6 three doted
const allAge3 = [...age,...age2,...age3];
console.log('contact array element with three doted '+allAge3);

// find maximum number with three dotted
const takaPoysa = [650,750,850,950];
const maximum = Math.max(...takaPoysa);
console.log(maximum);