// Dates 

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());

console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreateDate = new Date(2025, 0, 23)
console.log(myCreateDate.toDateString());
let myCreateDate2 = new Date(23, 1, 25, 6, 3, 59)
console.log(myCreateDate2.toLocaleString());
console.log(myCreateDate.getTime());



let myCreateDate3 = new Date("01-15-2025")
console.log(myCreateDate3.toLocaleString());


let myTimeStamp = Date.now()
console.log(myTimeStamp);

console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getMonth()+1 );


newDate.toLocaleString('default', {
    weekday: "long",
    

})






