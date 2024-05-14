// for of


// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);    
// }

// const greetings = "Hello world!"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
// }


// MAPs

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")

map.set('IN',"India")         // this entry is not include in map 
// bcz it store the uniuqe value in order

//console.log(map);

// for (const key of map) {
//     console.log(key);    
// }

for (const [key,Value] of map) {
    console.log(key , ':-' , Value);    
}

const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}



// Error throw :: Object in not iterable

// for (const [key,value] of myObject) {
//     console.log(key , ":-",value);
// }

