const accountId = 144567
let accountEmail = "ashish123@gmail.com"
var accountPassword = "12345"
accountCity = " Greater Noida"

//accountId = 2 // not allowed 
accountEmail = "ashish212121@gmail.com"
accountPassword = "21212121"
accountCity = "Bengaluru"
let accountstate;
console.log(accountId);


/* prefer not to use var 
because of issue with bin block space and functinal scope
*/
console.table([accountEmail,accountId,accountPassword,accountCity,accountstate])

