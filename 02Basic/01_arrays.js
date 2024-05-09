const myArr = [0,1,2,3,4,5]
const myHeros = ["Shkatiman" , "nagraj"]

const myArr2 = new Array(1,2,3,4,5)

//console.log(myArr[4]);

// Array method
// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(0)
// myArr.unshift(9)   // 9 is insertd at beginning so all the value of an array is shifted

// myArr.shift()  // shift is reverse of unshift


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));


// const myNewArray = myArr.join()  // Adds all the elements of an array into a string, separated by the specified separator string.


// console.log(myArr);  //[0,1,2,3,4,5]
// console.log(myNewArray);    // 0,1,2,3,4,5
// console.log(typeof myNewArray);  string


//  slice , splice
console.log("A " ,myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3)  // slice element remove from the array 
// splice can manipulate the original array
console.log("C ",myArr );
console.log(myn2);
