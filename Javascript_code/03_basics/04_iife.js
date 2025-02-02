// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    console.log(`DATABASE CONNECTED`);
    
})();

( (name) => {
    console.log(`DATABASE CONNECTED TWO ${name}`);
    
})('Ashish')
