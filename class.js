
class student {
    constructor(sId, sName) {
        this.id = sId;
        this.name = sName;//  prsetoperty
        this.school = 'GOVVT Bangabandhu college, Gopalganj';
    }
}

const student1 = new student(69, 'Kazol Biswas');//create object 1
const student2 = new student(72, 'Mahbub alom');//create object 2
console.log(student1.id, student2);