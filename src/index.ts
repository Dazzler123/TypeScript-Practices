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