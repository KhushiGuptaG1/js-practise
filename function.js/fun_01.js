// function myfunc(){
//     console.log("khushi kumari Gupta")
// }

// // myfunc()

// function sum(a,b){
//     console.log(a + b)
// }

// sum(8,5)
// sum(3,7)


// function addTwoNumbers(num1, num2){
//     let result = num1 + num2
//     return result
//     console.log("hello");  // after return no console works
    
// }
// const result = addTwoNumbers(7,8)
// console.log("Result is :", result);

function UserMessage(username = "rahi"){
    if(!username){
        console.log("Please enter a usernmae");
        return 
    }
    return `${username} just logged in`
}

console.log(UserMessage('Khushi'));
console.log(UserMessage());
