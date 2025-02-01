let a = 300

if (true) {
    let a = 10
    const b = 20
    var c = 30
    console.log("INNER: ", a);
    
}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }



// console.log(a);
// console.log(b);
// console.log(c);


function one()
{
    const username = "Ashish"
    
    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);

    two()
    
}

// one()

if (true) {
    const username = "Ashish"
    if (username === "Ashish") {
        const website = " Youtube"
        console.log(username + website);
        
    }
    //console.log(website);
    
}

// console.log(username);




//  +++++++++++++++++++  ineresting  ++++++++++++++++++

console.log(addone(5))
function addone(num)
{
    return num + 1
}



// addTwo(5) it throws error for calling before decalring a function  but not in above function 

const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5));


