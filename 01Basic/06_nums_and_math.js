const score = 400


const balance = new Number(100)
//console.log(balance);      // 100

const str1 = new Number("abc")
//console.log(str1);      //NaN


/*
Number {100}
[[Prototype]]: Number
constructor: ƒ Number()
toExponential: ƒ toExponential()
toFixed :ƒ toFixed()
toLocaleString: ƒ toLocaleString()
toPrecision: ƒ toPrecision()
toString: ƒ toString()
valueOf: ƒ valueOf()
[[Prototype]]: Object
[[PrimitiveValue]]: 0
[[PrimitiveValue]]: 100

*/


const balance1 = new Number(100)
//console.log(balance1);

// console.log(balance1.toString().length);
// console.log(balance1.toFixed(2)); // upto 2 decimal places

const otherNumber = 23.8966
//console.log(otherNumber.toPrecision(3));  // 23.9 :  make the digit precise to its nearest digit


const humdreds = 10000000
// make the string with commas 
//console.log(humdreds.toLocaleString('en-IN'));  //10,000,000 and en-In give as in indian number system
// en-in : 1,00,00,000



//+++++++++++++++++++++ Maths +++++++++++++++++++++++++

//console.log(Math); // Object [Math] {}

/* in console of website it shows more option

Math {abs: ƒ, acos: ƒ, acosh: ƒ, asin: ƒ, asinh: ƒ, …}
E: 2.718281828459045
LN2: 0.6931471805599453
LN10: 2.302585092994046
LOG2E: 1.4426950408889634
LOG10E: 0.4342944819032518
PI: 3.141592653589793
SQRT1_2: 0.7071067811865476
SQRT2: 1.4142135623730951
abs: ƒ abs()
acos: ƒ acos()
acosh: ƒ acosh()
asin: ƒ asin()
asinh: ƒ asinh()
atan: ƒ atan()
atan2: ƒ atan2()
atanh: ƒ atanh()
cbrt: ƒ cbrt()
ceil: ƒ ceil()
clz32: ƒ clz32()
cos: ƒ cos()
cosh: ƒ cosh()
exp: ƒ exp()
expm1: ƒ expm1()
floor: ƒ floor()
fround: ƒ fround()
hypot: ƒ hypot()
imul: ƒ imul()
log: ƒ log()
log1p: ƒ log1p()
log2: ƒ log2()
log10: ƒ log10()
max: ƒ max()
min: ƒ min()
pow: ƒ pow()
random: ƒ random()
round: ƒ round()
sign: ƒ sign()
sin: ƒ sin()
sinh: ƒ sinh()
sqrt: ƒ sqrt()
tan: ƒ tan()
tanh: ƒ tanh()
trunc: ƒ trunc()
Symbol(Symbol.toStringTag): "Math"

*/

// console.log(Math.abs(-3));  //3
// console.log(Math.round(3.6));  //4
// console.log(Math.ceil(4.2));   //5
// console.log(Math.floor(5.8));//5
// console.log(Math.min(8,3,1,2,5,6));   //1
// console.log(Math.max(8,3,1,2,5,6));  //8


console.log(Math.random());    // value come under the range 0  to 1


// get the random number in a range
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);