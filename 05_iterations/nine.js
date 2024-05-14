//reduce method 

const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc,currval) {
//     console.log(`acc : ${acc} and currval : ${currval}`);
//     return acc + currval
// } , 0) 

// 0 is intial value

// write in arrow function 
//const myTotal = myNums.reduce( (acc,curr)=> acc+curr , 0)


//console.log(myTotal);  // 6



const shoppingCart = [
    {
        itemName : "Js Course",
        price: 2999
    },
    {
        itemName : "python",
        price: 1999
    },
    {
        itemName : "Mobile dev course",
        price: 5999
    },
    {
        itemName : "data science course",
        price: 12999
    },
]


const priceToPay = shoppingCart.reduce( (acc,item) => acc + item.price,0)

console.log(priceToPay);
