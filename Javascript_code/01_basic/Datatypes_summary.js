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



// +++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive data type), Heap(Non-Primitive)

let myYoutubename = "Ashishkumardotcom"
let anothername = myYoutubename
anothername = "cahiaurcode"
console.log(myYoutubename);
console.log(anothername);

let userone = {
    email: "user@google.com"
    //upi: "user@ybl"
}
let userTwo = userone
userTwo.email = "ashish@google.com"
console.log(userone.email);
console.log(userTwo.email);



