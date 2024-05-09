const name = "Anant"
const repoCount = 50

//console.log(name + repoCount + "value"); //Anant50value

//better modern day syntax :: used in backend
// ${} :: use this
//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String("Anant-Gupta-harsh")

//console.log(gameName[0]);   // A
//console.log(gameName.__proto__);   //{}

// console.log(gameName.length);   //10
// console.log(gameName.toUpperCase());   //ANANTGUPTA

// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('t'));


// const newString = gameName.substring(0,4)
// console.log(newString);

// const anotherString = gameName.substring(-8,4)
// console.log(anotherString);

// const str1 = gameName.slice(-8,4)
// console.log(str1);


const newStringOne = "    Anant    "
console.log(newStringOne);
console.log(newStringOne.trim());


const url=  "https://hitesh.com/hitesh%20gupta"

console.log(url.replace('%20','-'));     // search and replace
//https://hitesh.com/hitesh-gupta   // % => -


console.log(url.includes('hitesh'));   //true

console.log(gameName.split('-'));  // [ 'Anant', 'Gupta', 'harsh' ]
