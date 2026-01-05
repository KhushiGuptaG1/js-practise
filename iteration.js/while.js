// initialization
// while(condition){
//     logic jo b print krana h
//     incre/decr
// }

// let i =1
// while(i<=10){
//     console.log(i)
//     i+=2
// }
// console.log(" ")

// //initialize
// do{
//   // code to run
// }
// while(condition);

// let j=1;
// do{
//     console.log(j);
//     j++;
// }
// while(j<=5)


// Bucket = ["fruits", "Vegetables", "drinks" , "Milk"]

// for(let i=0; i<Bucket.length ; i++){
//     console.log(Bucket[i])
// }

// for (let i of Bucket){
//     console.log(i)
// }

// const greeting = "Hello how's going on"
// for (const greet of greeting){
//     console.log(`General greet is ${greet}`)
// }

// const arr = [1,2,3,4,5];
// const result = arr.map((num,index) => {
//     return num*3;
// });
// console.log(result)

// const map = new Map()
// map.set('IN','India')
// map.set("AUS","australia")
// map.set("USA","United State of America")
// map.set("AUS","australia")
// map.set("PARIS","City of Love")

// // console.log(map);

// for (const [key,value] of map){
//     console.log(value)
// }

const myObj = {
    1 : "Khushi",
    2: "Avu",
    3: "Aai"
}

for (const key in myObj){
     console.log(myObj[key]);
}
