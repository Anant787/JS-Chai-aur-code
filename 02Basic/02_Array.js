const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

//marvel_heros.push(dc_heros)

// they get array inside the array 
//console.log(marvel_heros);  // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

//console.log(marvel_heros[3][1]);  // at index 3 at 1 which is flash

const allHeros = marvel_heros.concat(dc_heros)  // concat works on new array 
//console.log(allHeros);  // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// spread method [...]
const all_new_heros = [...marvel_heros,...dc_heros]
//console.log(all_new_heros);

// weird situation 
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)  // flat(depth value) is used to flat the array
//console.log(real_another_array);   
/* [
    1, 2, 3, 4, 5,
    6, 7, 6, 7, 4,
    5
  ]
  */



  //console.log(Array.isArray("Hitesh"));   // it return false bcz it is not an array
 // Array.isArray("hitesh")

 //console.log(Array.from("Hitesh"));   // [ 'H', 'i', 't', 'e', 's', 'h' ]

 //console.log(Array.from({name:"hitesh"})); // its generater : []  bcz it has to be provide to the array as this is key aur value


 let score1 = 100
 let score2 = 200
 let score3 = 300

 // of :: Returns a new array from a set of elements.
 console.log(Array.of(score1,score2,score3));      // [ 100, 200, 300 ]


