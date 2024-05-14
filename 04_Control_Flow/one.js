// if statement

const isLoggedIn = true
if(isLoggedIn){
    console.log("User logged in ");
}

// < , > , <= , >= , == , != ,  === , !== 

// if(2 === "2")
//     {
//         console.log("Executed");
//     }

//const score = 200

// if(score>100)
//     {
//         let power = "Fly"
//         console.log(`user power : ${power}`);
//     }
// console.log(`user Power : ${power}`);


// implicit code :: 
const balance  = 1000

//if(balance > 500) console.log("test") , console.log("test2");

// if(balance>500){
//     console.log("less than");
// }
// else if(balance < 750){
//     console.log("less than 750");
// }
// else if(balance<900){
//     console.log("less than 900 ");
// }
// else{
//     console.log("less than 2000");
// }


const userLoggedIn =  true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2==2){
    console.log("Allow to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User Logged In");
}
    