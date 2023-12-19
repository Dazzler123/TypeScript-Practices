"use strict";
let age = 25;
let studentName = "Saman Kumara";
let isActive = true;
let myObject = null;
let undefinedData = undefined;
let animals = ['1', '2', '3'];
let vehicles = ['Car', 'Bike', 'Lorry'];
let student = { name: 'Ranil', age: 90 };
let dog = { name: 'Wolfy', breed: 'Husky', height: 1 };
console.log(dog.name);
function getAgeAfterThreeYears(age, name) {
    return age += 3;
}
let myAge = getAgeAfterThreeYears(20, 'Dazzler');
function checkAgeAfterThreeYears(age, name) {
    if (age < 5) {
        return `Hello there ${name}!`;
    }
    else {
        return `Hello there ${name}!, you are ${age += 3} years old now.`;
    }
}
console.log(checkAgeAfterThreeYears(20, 'Dazzler'));
let myName = 'Saman';
console.log(typeof myName);
let numList = [10, 20, 30, 40];
console.log(numList[0]);
let stringList = ['', '', ''];
stringList.push('Hello');
stringList.pop();
let boy = ["Dasindu", 20];
const helloIsuru = (message) => {
    return message;
};
console.log(helloIsuru("Kamal"));
const waveIsuru = function (message) {
    console.log(message);
};
waveIsuru("Helloo!");
