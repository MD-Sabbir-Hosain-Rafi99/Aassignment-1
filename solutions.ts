// Problem-1
function filterEvenNumbers(numberArr: number[]) {

    const newArray: number[] = []
    numberArr.forEach((value: number) => {
        if (value % 2 === 0) {

            newArray.push(value);
        }
    })
    return newArray
}
filterEvenNumbers([1, 2, 3, 4])

// Problem-2
function reverseString(dataPass: string) {
    let reverse: string = ''
    for (let i = dataPass.length - 1; i >= 0; i--) {
        reverse = reverse + dataPass[i]
    }
    return reverse
}
// console.log(reverseString('typescript'))
reverseString('typescript')


// Problem-3
type StringOrNumber = string | number;
function checkType(input: StringOrNumber) {
    if (typeof input === 'string') {
        return "String"
    } else {
        return "Number"
    }
}
checkType(2)


// Problem-4
type User = {
    id: number; 
    name: string; 
    age: number;
    
}

const getProperty = <T>(input1: T, input2: keyof T) => {
    return input1[input2]
}

const user: User = {
    id: 1, 
    name: "John Doe", 
    age: 21,
}
getProperty(user, "name")
// console.log(getProperty(user, "name"))
// console.log(getProperty(user, "age"))


// Problem-5
interface Book{
    title: string;
    author: string;
    publishedYear: number;
}

function toggleReadStatus(input: Book){
    return{
        ...input,
        isRead: true,
    }
}

const book: Book = {
    title: "TypeScript Guide", 
    author: "Jane Doe", 
    publishedYear: 2024,
}
toggleReadStatus(book)
// console.log(toggleReadStatus(book))



// Problem-6
class Person{
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

class Student extends Person{
    grade: string;

    constructor(name: string, age: number, grade: string){
        super(name,age);
        this.grade = grade;
    }

    getDetails(){
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`
    }
}
const student = new Student("Alice", 20, "A");
student.getDetails()
// console.log(student.getDetails());


// Problem-7
function getIntersection(input1: number[], input2: number[]){
    let commonNewArray: number[] = [];
    for(let a of input1){
        for(let b of input2){
            if(a === b){
                commonNewArray.push(a);
            }
        }
    }
    return commonNewArray
}
getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])
// console.log(getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]))




