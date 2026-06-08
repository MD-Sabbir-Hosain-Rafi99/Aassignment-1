"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Problem-1
function filterEvenNumbers(numberArr) {
    const newArray = [];
    numberArr.forEach((value) => {
        if (value % 2 === 0) {
            newArray.push(value);
        }
    });
    return newArray;
}
filterEvenNumbers([1, 2, 3, 4]);
// Problem-2
function reverseString(dataPass) {
    let reverse = '';
    for (let i = dataPass.length - 1; i >= 0; i--) {
        reverse = reverse + dataPass[i];
    }
    return reverse;
}
// console.log(reverseString('typescript'))
reverseString('typescript');
function checkType(input) {
    if (typeof input === 'string') {
        return "String";
    }
    else {
        return "Number";
    }
}
checkType(2);
const getProperty = (input1, input2) => {
    return input1[input2];
};
const user = {
    id: 1,
    name: "John Doe",
    age: 21,
};
getProperty(user, "name");
function toggleReadStatus(input) {
    return {
        ...input,
        isRead: true,
    };
}
const book = {
    title: "TypeScript Guide",
    author: "Jane Doe",
    publishedYear: 2024,
};
toggleReadStatus(book);
// console.log(toggleReadStatus(book))
// Problem-6
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Student extends Person {
    grade;
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}
const student = new Student("Alice", 20, "A");
student.getDetails();
// console.log(student.getDetails());
// Problem-7
function getIntersection(input1, input2) {
    let commonNewArray = [];
    for (let a of input1) {
        for (let b of input2) {
            if (a === b) {
                commonNewArray.push(a);
            }
        }
    }
    return commonNewArray;
}
getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
// console.log(getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]))
//# sourceMappingURL=solutions.js.map