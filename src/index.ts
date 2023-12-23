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
