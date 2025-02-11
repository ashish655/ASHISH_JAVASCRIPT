const myNums = [1, 2, 3]


// const myTotal = myNums.reduce(function (accumulator, currentValue) {
//     console.log(`accumulator: ${accumulator}, currentValue: ${currentValue}`);
    
//     return accumulator + currentValue
// }, 0)

const myTotal = myNums.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

console.log(myTotal); // 6


const shoppingCart =  [
    {
        itemName: "js course",
        price : 2999
    },
    {
        itemName: "python course",
        price : 1999
    },
    {
        itemName: "ruby course",
        price : 3999
    },
    {
        itemName: "java course",
        price : 4999
    },
    {
        itemName: "data  science course",
        price : 12999
    }
]


const priceTpPay = shoppingCart.reduce((acc, item) =>acc + item.price, 0)
 
console.log(priceTpPay);
