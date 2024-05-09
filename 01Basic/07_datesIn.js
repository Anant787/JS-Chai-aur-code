/**
 jS dates Objec5 represent a single moment in time in a platform independent format.

 Date object encapsulate an intergral number that represent millisecond
 since the mid night at the beginning of jan 1, 1970 UTC

 This is proposed for TEMPORAL, a global object that acts as a top=level namespace

 */

 /**
  * Temporal.Now
  Temporal.Now.instant() - get the current system exact time
              .timeZone() - get the current time zone

  */



// Dates

let myDate = new Date()
//console.log(myDate);    // date object : 2024-05-09T09:20:02.755Z

// make it string
//console.log(myDate.toString());  // Thu May 09 2024 09:20:55 GMT+0000 (Coordinated Universal Time)

//console.log(myDate.toDateString());  // Thu May 09 2024 
//console.log(myDate.toLocaleString());  // 5/9/2024, 9:22:02 AM


//console.log(typeof myDate ) // object


// to create our own date
// let myCreateDate  = new Date(2023,0,24)
// console.log(myCreateDate.toDateString());      // Tue Jan 24 2023 :: month start with 0


let myCreateDate1  = new Date(2023,0,24,5,3)
//console.log(myCreateDate1.toLocaleString());     // 1/24/2023, 5:03:00 AM


//++++++ Time stamp +++++++

let myTimeStamp = Date.now()

// console.log(myTimeStamp);  // milli sec  : 1715247316632
// console.log(myCreateDate1.getTime());    // milli sec :  1674536580000
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
 console.log(newDate);
// console.log(newDate.getDay());


// to customized the local date string

newDate.toLocaleString('Default',{
    weekday: "long"

})