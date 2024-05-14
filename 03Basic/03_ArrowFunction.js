// using this keyword ::  which hold the current context 

const user = {
    username : "Hitesh",
    price : 999,


    welcomeMessage : function(){
        console.log(`${this.username},  Welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage()         //Hitesh,  Welcome to website
// user.username = "Sam"         // change the context
// user.welcomeMessage()     // Sam,  Welcome to website

//console.log(this);      // {} : empty "we are in node environment that refer to the empty object "



// function chai()
// {
//    let username = "Hitesh"
//     console.log(this.username);    // undefined
// }
// chai()


// const chai = function(){
//     let username = "Hitesh"
//     console.log(this.username);    // also show undefined
// }
// chai()


// ARROW function :  works similar like above

// const chai = () => {
//     let username =" hitesh"
//     console.log(this.username);        // undefined
// }
// chai()


// ++++++++++  PURE arrow function +++++++

// explicit return :: using return keyword  and curly brakets{}
// const addTwo = (num1,num2) => {
//     return num1+num2
// }

// Implicit return  :: we have only one line statement ::  need not to write the return keyword
// const addTwo = (num1,num2) => num1+num2

//const addTwo = (num1,num2) => (num1+num2)   // here we use normal paranthesis ():: this will work normally 

// what if we have to return object :: We have to wrap it with curly braket {}
const addTwo = (num1,num2) => ({username : "hitesh"})

console.log(addTwo(2,4));       // 6