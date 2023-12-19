//================= variables ===================
let age: number = 25;
let studentName = "Saman Kumara";
let isActive: boolean = true;
let myObject: null = null;
let undefinedData: undefined = undefined;
let animals: Array<string> = ['1', '2', '3'];
let vehicles: string[] = ['Car', 'Bike', 'Lorry'];  //a string array
let student: { name: string, age: number } = {name: 'Ranil', age: 90}; //an object with given types for properties


// --------------------------------------------
interface Animals {
    name: string;
    breed: string;
    height: number
}

let dog: Animals = {name: 'Wolfy', breed: 'Husky', height: 1};
console.log(dog.name);

// --------------------------------------------

function getAgeAfterThreeYears(age: number, name?: string): number { // here name parameter is optional (not required)
    return age += 3;
}

let myAge: number = getAgeAfterThreeYears(20, 'Dazzler');

// --------------------------------------------

function checkAgeAfterThreeYears(age: number, name?: string): string { // here name parameter is optional (not required)
    if (age < 5) {
        return `Hello there ${name}!`;   //we can use variables within strings using ${}
    } else {
        return `Hello there ${name}!, you are ${age += 3} years old now.`;
    }
}

console.log(checkAgeAfterThreeYears(20, 'Dazzler'))

// --------------------------------------------

let myName = 'Saman';
console.log(typeof myName);  //prints the type of myName
//* Decides the type of myName looking at its assigned value type ---> "Saman";
//* This is called Type inference.

// --------------------------------------------

let numList: number[] = [10, 20, 30, 40];
console.log(numList[0]);  //prints value of 0 index element

// --------------------------------------------

let stringList: Array<string> = ['', '', ''];
// let stringListTwo: Array<string>= ['','','',10]; //error here - array with generic type 'string'
// (only string containing array)
// --------------------------------------------

stringList.push('Hello')  //adds new element to list
stringList.pop() // removes last element in the list
// --------------------------------------------

let boy: [string, number] = ["Dasindu", 20]; // can give types like so as well
                                             // * This is called a "Tuple"

// --------------------------------------------

const helloIsuru = (message: string): string => { //arrow function
    return message;
}
console.log(helloIsuru("Kamal"));

// --------------------------------------------
const waveIsuru = function (message: string): void { //function expression
    console.log(message);
}
waveIsuru("Helloo!")
// * In JS, we can send a parameter as an argument, or can assign an function
//   to a variable.
// --------------------------------------------