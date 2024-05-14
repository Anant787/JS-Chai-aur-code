// basic function 
// console.log("H");
// console.log("A");
// console.log("R");
// console.log("S");
// console.log("H");
// console.log("Gupta");


function sayMyName()
{
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("S");
    console.log("H");
    console.log("Gupta");
}

//sayMyName()            // call the function :: Reference

// function addTwoNumber(n1,n2)
// {
//     // let a = 10;
//     // let b = 20;
//     // let c = a+b;
//     //console.log(c);
//     console.log(n1+n2);
// }

function addTwoNumber(n1,n2)
{
    let result = n1+n2;

    return  result
}


const res = addTwoNumber(2,5);
//console.log("Result :", res);


function loginUserMessage(username  = " sam")   // sam as default
{
    if(username === undefined)       // we use this :: !username
        {
            console.log("Please enter the username");
            return   // used to finish this statement here
        }
    return `${username} just logged in`
}

//console.log(loginUserMessage("Hitesh"));   // Hitesh just logged in
//console.log(loginUserMessage());       // just logged in








// rest operator

function calulateCartPrice(...num1)
{
    return num1
}
//console.log(calulateCartPrice(200,2300,200,400,500));    // store as in array



// obejct to pass ti the function 

const user = {
    username : "Hitesh",
    price : 199
}

function handleObject(anyobject)
{
    console.log(`Username id ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)     // function call 

// user defined functioncal
handleObject({
    username:"Anant",
    price:399
})

const myNewArray = [200,400,120,600]

function returnSecondValue(getArray) {
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,900,600,1000]));