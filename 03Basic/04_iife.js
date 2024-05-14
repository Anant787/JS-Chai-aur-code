// Immediately Invoked Function Expression (IIFE)

 // Using normal Paraenthesis : wrap the whole fucntion with these paranthesis and for revoking use () in last
(function chai(){
    // Named IIFE
    console.log(`DB connected`);
})();
// We have to end the scope by using the semicolon
// shows output : DB connected 

//()()

// to prevent from the global scope pollution

(function aurCode(){
    console.log(`DB connected two`);
})();


((name) =>{
    console.log(`DB Connected three ${name}`);
})('Hitesh');

