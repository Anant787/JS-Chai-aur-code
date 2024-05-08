// let score = "33"
// let marks = "69abc"

// console.log(typeof score);  //string
// console.log(typeof(score)); // string  ||  pass as function

// let valueInNumber = Number(score)    //Number is used to typecast the  string into number
// let marksInNumber = Number(marks)  


// console.log(typeof valueInNumber);  // string converted as number
// console.log(typeof marksInNumber);
// console.log(marksInNumber);     //NaN (not a number)


// let score1 = null
// let markScore1 = Number(score1);
// console.log(markScore1); // 0



//notes

//33 => 33
//33abc =>  NaN (string not converted purely to number)
// true => 1 || false => 0

// to check the value from boolean also

// let isLoggedIn = 1

// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);   //true

//if string is empty  ("") it return false otherwise ("Harsh") return true


// let someNumber = 33

// let stringNumber = String(someNumber)
// console.log(stringNumber) // its give 33 as output but as string
// console.log(typeof stringNumber); // its is string type








//************* OPERations *************

let value = 3
let negValue = -value
//console.log(negValue);        // -3

//basic operations

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); //power 
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = "Anant"

let str3 = str1 + str2 // only addition is applicable

// console.log(str3); // hello Anant


// console.log("1" + 2);     //12
// console.log(1 + "2");       //12 
// console.log("1" + 2 + 2 );     //122
// console.log(1 + 2 + "2");    //32    why ?? 



//console.log(+true);   //1
//console.log(true+); //error

let num1,num2,num3 

num1 = num2 = num3 = 3+2 // not readiable

let gameCounter = 100
//gameCounter++;       // increment operator
++gameCounter;
console.log(gameCounter);