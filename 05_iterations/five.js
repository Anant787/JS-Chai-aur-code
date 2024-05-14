// for each loop

const coding = ["js","ruby","java","py","cpp"]

// its a call back function .. due to this it has not name 
// coding.forEach( function (item){
//     console.log(item);
// } )

// we can also use arrow fucntion
// coding.forEach( (item) => {
//     console.log(item);
// })


// we can use userdefined function
// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)        // give reference only .. to execute the function that why we don't use ()




// coding.forEach( (item,index,arr)=>{
//     console.log(item, index , arr);
// })

// js 0 [ 'js', 'ruby', 'java', 'py', 'cpp' ]
// ruby 1 [ 'js', 'ruby', 'java', 'py', 'cpp' ]
// java 2 [ 'js', 'ruby', 'java', 'py', 'cpp' ]
// py 3 [ 'js', 'ruby', 'java', 'py', 'cpp' ]
// cpp 4 [ 'js', 'ruby', 'java', 'py', 'cpp' ]




// object of aaray
const myCoding = [
    {
        languageName : "Javascript",
        languageFileName : "js"
    },
    {
        languageName : "java",
        languageFileName : "java"
    },
    {
        languageName : "python",
        languageFileName : "py"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})

