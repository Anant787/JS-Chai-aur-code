const accountId = 144533
let accountEmail ="Anant@google.com"
var accountPassword = "12345"
acountCity = "Jaipur"

let accountState;  // generate the undefined or garbage value


/* 
prefer not to use var to declare variavble becasuse
of issue in block scope and functional scope
*/

accountEmail = "harsh@yahoo.com"
accountPassword = "382822"
acountCity = "bangluru"

//not allowed to change the value of const
//console.log(accountId);

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,acountCity,accountState])