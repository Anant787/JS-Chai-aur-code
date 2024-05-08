// console.log(2>1);
// console.log(2>=1)
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

//output of these comparison is in true and false

//if you compare two entity,we have to make them of same data type
// console.log("2" > 1)  // true
// console.log("02" > 1 );  //true

// console.log(null > 0 );  // false
// console.log(null == 0);  // false
// console.log(null >= 0);  //true

//the reason is that an equality check == and  comparison ><>=<= work differently
//comparison convert null to a number , treating it as 0
//that's why(3) null>=0 is true and (1) null >0 is false


// same with the undefined .. its also give false as output when we compare the entity

// strict check (===)(check not only the value but also the data type)

console.log("2" === 2); //  false bcz value is same but not the datatype


