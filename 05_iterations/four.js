const myObject={
    js : 'Javascript',
    cpp : 'C++',
    rb: "Ruby",
    swift : "Swift by apple"
}

//for in loop

// for (const key in myObject) {
// console.log(key);
// }

// js
// cpp
// rb
// swift

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

// js shortcut is for Javascript
// cpp shortcut is for C++
// rb shortcut is for Ruby
// swift shortcut is for Swift by apple

const programming = ["js","rb","py","java","cpp"]
for (const key in programming) {
    console.log(programming[key]);
}