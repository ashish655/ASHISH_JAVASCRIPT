// singleton 

// object literals


const mySym = Symbol["key1"]
const JsUser =  {
    name: "Ashish",
    "full name": "Ashish Kumar Thakur",
    age: 22,
    [mySym]: "myKey1",
    location: "Delhi",
    email: "tashishkumar09@gmail.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday", "Saturady"]

}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser["LastLoginDays"]);
console.log(JsUser["location"]);
console.log(JsUser["isLoggedIn"]);
console.log(JsUser["age"]);
console.log(JsUser[mySym]);
console.log(typeof JsUser[mySym]);

JsUser.email = "ashish@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "Ashish123@gmail.com"
console.log(JsUser["email"]);

JsUser.greeting = function()
{
    console.log("Hello JS User");
    
}
JsUser.greeting2 = function()
{
    console.log(`Hello JS User, ${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());











