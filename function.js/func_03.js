// const user = {
//     name : "khushi",
//     age:22,
//     welcomeMessage : function(name){
//         return `heii ${this.name}, Welcome to new office`
//     }
    
// }

// console.log(user.welcomeMessage())

// user.name = "aayushi"
// console.log(user.welcomeMessage())

// function mine(){
//     username : "KD"
//     console.log(this.username);
// }

// const mine = function (){
//     username : "khushi"
//     console.log(this.username)
// }

// mine()

// const mine = ()=>{
//     username : "khushi"
//     console.log(this.username)
// }

// mine()

// const addTwoNum = (n1,n2) =>{
//     sum = n1 + n2
//     return sum    
// }
// console.log(addTwoNum(4,9))


// Immediately Invoked Function Expression  (IIFE)
(function arr(){
    console.log("connection formed");
}
)()

// Function banate hi call ho gayi
// Alag se arr() likhne ki zarurat nahi

// what is IIFE?
//sometimes glope scope kai pollution sai problem hoti h , toh usse bcchne k liye hhum IIFE use krte h.  // this is the correct way to answer this qs.
//(Aisi function jo define hote hi turant execute ho jaati hai.)

// Why do we use IIFE? (MAIN REASON)
// ❌ Problem: Global Scope Pollution
// var a = 10;
// var a = 20; // overwrite ho gaya 😨


// Global variables:

// overwrite ho sakte hain

// name conflict create karte hain

// bugs aate hain

// ✅ Solution: IIFE
// (function () {
//     var secret = "database password";
//     console.log("inside iife");
// })();

// console.log(secret); // ❌ Error


// 📌 IIFE apna alag scope banata hai
// 📌 Bahar ka code iske andar ke variables ko access nahi kar sakta

// 👉 Isi liye kehte hain:

// Global scope ke pollution se bachne ke liye IIFE use karte hain
