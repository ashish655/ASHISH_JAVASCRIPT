const user = {
    username: "Ashish",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, ${this.price} , welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// user.price = 9999
//console.log(this);

// function chai()
// {
//     let username = "Ashish"
//     console.log(this.username);
    
// }

// chai()

const chai = () =>
{
    let username = "Ashish"
    console.log(this.username);
    
}

//chai()



// const addTwo = (num1, num2) => {
//     return num1 + num2
// }



// implicit 


// const addTwo = (num1, num2) =>   num1 + num2
const addTwo = (num1, num2) =>  (num1 + num2)

console.log(addTwo(3, 4))