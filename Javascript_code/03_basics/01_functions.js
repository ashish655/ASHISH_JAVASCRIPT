

function sayMyName()
{
    console.log("A");
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("S");
    console.log("H");
}
// sayMyName()


// function addTwoNumbers(number1,number2) // parameter number1 & number2
// {
    
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) // parameter number1 & number2
{
    
    // let result =number1 + number2
    // return result
    return number1 + number2
}
const result = addTwoNumbers(5, 5) // argument 5,2

// console.log("Result: ", result);



function loginUserMessage(username)
{
    // if (username === undefined) 
    if (!username) 
    {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Ashish"))

function calculateCartPrice(val1, val2, ...num1)
{
    return num1
}
//console.log(calculateCartPrice(200, 300, 400, 500));

const user = {
    username: "Ashish",
    price: 1999
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray)
{
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

