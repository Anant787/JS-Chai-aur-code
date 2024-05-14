//let var and const

// let a =10 
// const b =30
// var c = 30

// console.log(a);
// console.log(b);
// console.log(c);

let a = 300
if(true){
    let a =10 
    const b =30
    var c = 30
    //console.log(a);
}



//console.log(a);
//console.log(b);
//console.log(c);       // print 30
 
    
// nested scope
function one()
{
    const userName = "Hitesh"

    function two()
    {
        const website = "youtube"
        console.log(userName);
    }
    //console.log(website);
    two();
}

//one()


if(true){
    const username = "Hitesh"
    if(username === "Hitesh"){
        const website = " youtube"
       // console.log(username + website);
    }
    //console.log(website);
}

//console.log(userName);


//+++++++++++++ Interesting  +++++++++++



console.log(addone(5));

function addone(num){
    return num + 1
}


console.log(addTwo(5));           // erroe due to hoisting :: We have hold the value of function into some variable
const addTwo = function(num)
{
    return num + 2
}


