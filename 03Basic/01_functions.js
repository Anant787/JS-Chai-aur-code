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
console.log(loginUserMessage());       // just logged in


