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
    private displaySize:number;
    constructor(displaySize:number) {
        this.displaySize = displaySize;
    }

    call () : void {
        console.log('Calling...!');
    }

    message () : void {
        console.log('Messaging...!')
    }

    abstract fileTransfer () : void; // no implementation yet
    //abstract function should only be declared inside a ABSTRACT class!!
    //these are not CONCRETE functions
}







