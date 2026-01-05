// nums = [1,2,3,5,6,7,8,9,10]

// // let newNums = nums.filter((nums)=>nums%2!=0)
// // console.log(newNums);

// let Numss = nums.filter((nums)=>nums>5)
// console.log(Numss);

// let myNums = nums.map((nums)=> nums*2)
// console.log(myNums);

// const acc = 0
// const calcultedVal = nums.reduce((acc,nums)=> acc+nums,0)
// console.log(calcultedVal)

// const classOfStudents = [
//     {
//         studentName : "Khushi Gupta",
//         studentAge : 23
//     },
//     {
//         studentName : "Avu Bansal",
//         studentAge : 7
//     },
//     {
//         studentName : "Aai Goel",
//         studentAge : 3
//     },
//     {
//         studentName : "Dk",
//         studentAge : 23
//     }
// ] 
// const StudentAge = classOfStudents.filter((arr) => arr.studentAge == 23)
// console.log(StudentAge)

const shoppingCart = [
    {
       itemName: "Book",
       itemDesc : "The Power Of Your Subconcious Mind",
       price : "199"
    },
    {
        itemName : "yoga Mat",
        itemDesc : "physical fitness is essential for better survival especially in city's like noida,Delhi NCR",
        price : 2000 
    },
    {
       itemName: "Book",
       itemDesc : "October Junction",
       price : "399"
    }
]

const totalPrice = shoppingCart.reduce((acc,item)=>acc+ Number(item.price), 0)
console.log(totalPrice);
