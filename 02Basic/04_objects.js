// object with the hep of construtor 
//const tinderUser = new Object()   // singleton object
const tinderUser = {}        // non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

/*
{ id: '123abc', name: 'Sammy', isLoggedIn: false } \
 */
//console.log(tinderUser);  // emprty object

const regularUser = {
    email : "Some@gmail.com",
    fullname:{
        userfullname: {
            firstname: "hitesh",
            lastname : "choudhary"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj4 = {5:"a",6:"b"}

// combine the object

//const obj3 = {obj1,obj2}
//console.log(obj3);  // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
  
// object.assign(target {}, source obj1)
// const obj3 = Object.assign({},obj1,obj2,obj4)
// console.log(obj3);     // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


// const obj3 = {...obj1, ...obj2 , ...obj4}
// console.log(obj3);      // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'a', '6': 'b' }


// value coming from the data base
const users= [
    {
        id :1,
        email:"h@google.com"
    },
    {
        id :1,
        email:"h@google.com"
    },
    {
        id :1,
        email:"h@google.com"
    }
]

//user[1].email

// console.log(tinderUser)   // { id: '123abc', name: 'Sammy', isLoggedIn: false } => key and value

// console.log(Object.keys(tinderUser));   // [ 'id', 'name', 'isLoggedIn' ] all keys

// console.log(Object.values(tinderUser));  // [ '123abc', 'Sammy', false ]  values only

// console.log(Object.entries(tinderUser));  // [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]   in array form

// hasOwnProperty methos is used to check the value present in object
// return boolean

//console.log(tinderUser.hasOwnProperty('isLoggedIn'));   // return true



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//            Destructuring the Object         

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


const course = {
    coursename : "js In Hindi",
    price : "999",
    courseInstructor : "Hitesh"
}

//course.courseInstructor    // working but not reliable


// syntax => const{key : nickname}  = object name
const {courseInstructor : teacher} = course
console.log(teacher);  // pass teacher as nickname of courseInstructor

 
//             API

// earyly the value come in XML format but now in modern version 
// the value comes in JSON format  : JAVA SCRIPT OBJECT NOTATION


// jSON format has no name in compare to object
// in jSON format in key is of STRINGs 

/*
JSON format

{
    "name" : "Hitesh ",
    "CourseName": "JS in Hindi",
    "Price" : "free"
 }

 */

  
