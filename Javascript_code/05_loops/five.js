const coding = ['JavaScript', 'Python', 'Ruby', 'Java', 'C++'];

// coding.forEach(function (val){
//     console.log(val);
    
// } )

// coding.forEach( (item) => {   
//     console.log(item);
    
// } )

// function printMe(item){
//     console.log(item);
    
// }

// coding.forEach(printMe);

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
    
    
// } )

const myCoding = [
    {
        languageName: 'JavaScript',
        languageFile : 'js'
    },
    {
        languageName: 'Python',
        languageFile : 'py'
    },
    {
        languageName: 'Ruby',
        languageFile : 'rb'
    },
    {
        languageName: 'Java',
        languageFile : 'java'
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName);
    

})