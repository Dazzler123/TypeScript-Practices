// ========== Objects ====================


//====== Literals ========
const studentObj = {
    name: 'Mahinda',
    age: 90,
    address: {
        city: 'Gampaha',
        zipCode: '11400'
    }
};

console.log(studentObj)
console.log(studentObj.name);
console.log(studentObj.address);
console.log(studentObj.address.city);
console.log(typeof studentObj);


//====== Interface based ========
interface Student {
    name: String;
    age: number;
    address: {
        city: string;
        zipCode: string;
    }
}

const studentObjTwo: Student = {
    name: 'Mahinda',
    age: 90,
    address: {
        city: 'Gampaha',
        zipCode: '11400'
    }
};

console.log(studentObjTwo)
console.log(studentObjTwo.name);
console.log(studentObjTwo.address);
console.log(studentObjTwo.address.city);
console.log(typeof studentObjTwo);

// ===========================================

class Customer {
    name: string;
    age: number;
    address: {
        city: string;
        zipCode: string;
    }

    constructor(name: string, age: number, address: { city: string, zipCode: string }) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
}

const customer = new Customer('Dazzler', 20, {city: 'Gampaha', zipCode: '11400'});
console.log(customer);
console.log(customer.address);


// ============== Encapsulation ===================

class CustomerDetail {
    name: string;
    readonly age: number; // this is read only now
    address: {
        city: string;
        zipCode: string;
    }

    constructor(name: string, age: number, address: { city: string, zipCode: string }) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    public setName(name: string) {
        this.name = name;
    }

    public setAge(age: number) {
        if (age < 0) {
            return;
        }
        // this.age = age;
    }
}

const customerDetail = new CustomerDetail('Dazzler', 20, {city: 'Gampaha', zipCode: '11400'});
customerDetail.setName('Dasindu');
customerDetail.setAge(21);
console.log(customerDetail);


// ============== extends keyword ===================

interface CommonCustomerDetail {
    name: string;
    presentAge: number;
}

interface Customer extends CommonCustomerDetail {
    portalUser: boolean;
}

interface Vendor extends CommonCustomerDetail {

}

// always same type (interface --> to --> interface) EXTENDS !!!
// always difference type (class --> to --> interface OR vice versa..) IMPLEMENTS !!!


// ============== Inheritance ===================

class Animal {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Cow extends Animal {
    breed: string;

    constructor(name: string, age: number, breed: string) {
        super(name, age);
        this.breed = breed;
    }

    public sound(): void {
        console.log(`${this.name} sound...`);
    }
}

const animal = new Animal('Cow', 2);
const cow = new Cow('Sheep', 2, 'Waltation');
console.log(animal);
console.log(cow);
cow.sound();

// ============== Abstraction ===================
abstract class Phone {
    private displaySize: number;

    constructor(displaySize: number) {
        this.displaySize = displaySize;
    }

    call(): void {
        console.log('Calling...!');
    }

    message(): void {
        console.log('Messaging...!')
    }

    abstract fileTransfer(): void; // no implementation yet
    //abstract function should only be declared inside a ABSTRACT class!!
    //these are not CONCRETE functions
}


// ============== Generics ===================
function getData<T>(value: T): T {
    return value;
}

let numberValue = getData<number>(10);
let stringValue = getData<string>('Nimal');

console.log(numberValue);
console.log(stringValue);

// ============== Generics - Reusable Components ===================
interface Shape<T> {
    type: T;
}

let s1: Shape<string> = {type: 'Rectangle'};
let s1Radius: Shape<number> = {type: 10};
let s1IsLarge: Shape<boolean> = {type: false};

// ============== Generics - Constraints ===================
interface ElementLength {
    length: number;
}

function showLength<T extends ElementLength>(value: T): void {
    console.log(value.length);
}

showLength([10, 20, 30]);
showLength('Muthu');
// showLength(false); // cannot assign boolean (because string or arrays does
// have a length but boolean does not.


// ============== Exception Handling - try, catch & finally ===================
function divide(num1: number, num2: number): number {
    if (num2 == 0) {
        throw new Error('Invalid Input on num2!');
    }
    return num1 / num2;
}

try {
    let answer = divide(40, 2);
    console.log(answer);
} catch (error) {
    console.log(error);
} finally {
    console.log('Inside Finally block...');
}



// ============== Type Guards ===================
function setStringData(value:string | number):void { // can define multiple types
    console.log(typeof value);
}

setStringData('String data..');
setStringData(130);

// ============== Type Guards with instanceOf ===================
class Dog {
    sound():void {
        console.log('Dog Sounds....');
    }
}
class Cat {
    walk():void{
        console.log('Cat walking...');
    }
}
function executor(value:Dog | Cat) {
    if (value instanceof Dog) {
        value.sound();
    } else {
        value.walk();
    }
}

executor(new Dog());
executor(new Cat());


// ============== Type Guards with in ===================
class OldDog {
    name:string;
    constructor(name:string) {
        this.name = name;
    }
}
class OldCat {
    age:number;
    constructor(age:number) {
        this.age = age;
    }
}

function collectData(value: OldDog | OldCat) {
    if ('name' in value) {
        console.log(value.name);
    } else {
        console.log(value.age);
    }
}


// ============== Assertions ===================
interface Vehicle {
    type:string;
}
interface Car extends Vehicle{
    drive():void;
}
interface Van extends Vehicle{
    start():void;
}
interface Bus extends Vehicle {
    stop():void;
}
function execute(vehicle: Vehicle):void {
    (vehicle as Car).drive();
    (vehicle as Van).start();
    (vehicle as Bus).stop();
}


// ============== Union Types ===================
interface Animal {
    name:string;
}
interface Dog extends Animal{
    name:'myDog';
    height:number;
}
interface Cat extends Animal{
    name:'myCat';
    height: number;
}

type MyPet = Dog | Cat;

function trigger(pet: MyPet) {
    if (pet.name == 'myDog') {
        console.log('Dog');
    } else {
        console.log('Cat');
    }
}


// ============== key of & typeOf ===================
interface StudentType{
    name:string;
    age:number;
    isActive:boolean;
}

type StudentKeys = keyof StudentType; // 'name'  'age'  'isActive'

const studentNameType: StudentKeys="name";
const studentAgeType:StudentKeys="age";
const studentAvailability:StudentKeys="isActive";




