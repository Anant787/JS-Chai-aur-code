//  object has two method to declare
// 1. litrals    2. constructor

// singleton  // any contructor made through it make singleton object
// object literals
//Object.create     // constructor method

// Object has key value system 

const mySym = Symbol("key1")
//console.log(mySym);

const JsUser = {
    name:"Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym] : "mykey1",
    age : 18,
    location : "Jaipur",
    email : "hitesh@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
}
// in key-value structure :  key as stored in String
// "full name": "Hitesh Choudhary" =>  this cannot be access through the dot method (.full name )
// to access the symbol in object we must encolse the symbol with parathesis




// how to access the object 
//console.log(JsUser.email);   // one way to acces is using dot and key value

// console.log(JsUser["email"]);  // by using the paranethesis
// //console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);    // string
// console.log(JsUser[mySym]);    

// to change the value of object

// JsUser.email = "Annat@google.com"
// Object.freeze(JsUser)      // freeze is used to make the value remain unchanged
// JsUser.email = "Harsh@microsoft.com"
// console.log(JsUser);   

// to add the function in object 

JsUser.greeting = function()
{
    console.log("Hello JS user");
}

JsUser.greetingTwo = function()
{
    console.log(`Hello JS user , ${this.name}`);
}

console.log(JsUser.greeting());   // access the function 

console.log(JsUser.greetingTwo()); //Hello JS user , Hitesh

