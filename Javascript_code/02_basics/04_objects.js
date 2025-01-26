//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Ashish"
tinderUser.isLoggedIn = false
//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    Fullname:{
        useFullname:{
            firstname: "Ashish",
            lastname: "Kumar"
        }
    }
}

console.log(regularUser.Fullname.useFullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "b"}
const obj4 = {5: "c", 6: "b"}

//const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1,...obj2,...obj4}
console.log(obj3);

const users = [
    {
        id: 1,
        email: "ashishjs@123",
    },
    {
        id: 1,
        email: "ashishjs@123",
    },
    {
        id: 1,
        email: "ashishjs@123",
    },
    {
        id: 1,
        email: "ashishjs@123",
    },
    {
        id: 1,
        email: "ashishjs@123",
    },
    {
    },
    {
    },
    {
    },
    {
    },
    
]

users[1].email
console.log(tinderUser);


console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));









