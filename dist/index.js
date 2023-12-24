"use strict";
const studentObj = {
    name: 'Mahinda',
    age: 90,
    address: {
        city: 'Gampaha',
        zipCode: '11400'
    }
};
console.log(studentObj);
console.log(studentObj.name);
console.log(studentObj.address);
console.log(studentObj.address.city);
console.log(typeof studentObj);
const studentObjTwo = {
    name: 'Mahinda',
    age: 90,
    address: {
        city: 'Gampaha',
        zipCode: '11400'
    }
};
console.log(studentObjTwo);
console.log(studentObjTwo.name);
console.log(studentObjTwo.address);
console.log(studentObjTwo.address.city);
console.log(typeof studentObjTwo);
class Customer {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
}
const customer = new Customer('Dazzler', 20, { city: 'Gampaha', zipCode: '11400' });
console.log(customer);
console.log(customer.address);
class CustomerDetail {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    setName(name) {
        this.name = name;
    }
    setAge(age) {
        if (age < 0) {
            return;
        }
    }
}
const customerDetail = new CustomerDetail('Dazzler', 20, { city: 'Gampaha', zipCode: '11400' });
customerDetail.setName('Dasindu');
customerDetail.setAge(21);
console.log(customerDetail);
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Cow extends Animal {
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }
    sound() {
        console.log(`${this.name} sound...`);
    }
}
const animal = new Animal('Cow', 2);
const cow = new Cow('Sheep', 2, 'Waltation');
console.log(animal);
console.log(cow);
cow.sound();
class Phone {
    constructor(displaySize) {
        this.displaySize = displaySize;
    }
    call() {
        console.log('Calling...!');
    }
    message() {
        console.log('Messaging...!');
    }
}
function getData(value) {
    return value;
}
let numberValue = getData(10);
let stringValue = getData('Nimal');
console.log(numberValue);
console.log(stringValue);
let s1 = { type: 'Rectangle' };
let s1Radius = { type: 10 };
let s1IsLarge = { type: false };
function showLength(value) {
    console.log(value.length);
}
showLength([10, 20, 30]);
showLength('Muthu');
function divide(num1, num2) {
    if (num2 == 0) {
        throw new Error('Invalid Input on num2!');
    }
    return num1 / num2;
}
try {
    let answer = divide(40, 2);
    console.log(answer);
}
catch (error) {
    console.log(error);
}
finally {
    console.log('Inside Finally block...');
}
function setStringData(value) {
    console.log(typeof value);
}
setStringData('String data..');
setStringData(130);
