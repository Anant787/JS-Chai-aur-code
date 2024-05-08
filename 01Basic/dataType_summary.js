// primitve data type
// 7 type : call by value
// String,Number, Boolean , null , undefined , Symbol ,BigInt,

const score = 100
const scoreValue = 100

const isLoggedIn = false
const outsideTemp  = null 
let userEmail;

const id = Symbol('123')

const anotherId = Symbol('123')

console.log(id === anotherId);


const bigNumber = 27127646287362364n





// Refernece type ::  non Premitive 
// Array , Objects , Functions 

const heros = ["shaktiman","naagraj","doga"]

let myObj= {
    name:"anant",
    age:22,
}

const myFunction = function(){
    console.log("Hello world");
}