// Types of datatype
// Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
const userEmail = undefined

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 345689899687907907n


// Non Primitive (Refrence)
// Array,  Objects, Functions

const heros = ["sahaktiman", "naagraj", "doga"];

let myObj = {
    name: "Ashish",
    age: 22,
}

const myFunction = function () {
    console.log("Hello World");  
}

console.log(typeof myFunction);
