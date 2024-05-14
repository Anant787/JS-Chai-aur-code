// for

for (let i = 0; i < 10; i++) {
    const element = i;
    if(element == 5){
        //console.log("5 is the best number");
    }
    //console.log(element);
}


// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop value : ${i}`);
//     for (let j = 0; j <= 10; j++) {
//         console.log(`Inner loop Value : ${j} and inner Value : ${i}`);
//     }
// }



// let myHeros = ["flash" , "batman","superman"]
// console.log(myHeros.length);
// for (let index = 0; index < myHeros.length; index++) {
//     const element = myHeros[index];
//     console.log(element);
    
// }



// break and continue

// for (let index = 1; index <= 20; index++) {
//     if(index == 5){
//         console.log(`Detected 5`);
//         break;
//     }
//     console.log(`value of i is ${index}`);
// }


for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`Detected 5`);
        continue;
    }
    console.log(`value of i is ${index}`);
}
