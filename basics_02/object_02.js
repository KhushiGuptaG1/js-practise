const person = {}

person.name = "khushi"
person.id = 1
person.city = "Saharanpur"
person.age = 22
person.loyal = true

// console.log(person)

// const regularUser = {
//     email: "kg@123gmail.com",
//     fullname : {
//         firstname : "khushi",
//         lastname : "Gupta"
//     }

// }

// // console.log(regularUser);
// //console.log(regularUser.fullname);
// console.log(regularUser.fullname.firstname);

const ob1 = {1:"a", 2:"b"}
const ob2 = {3: "c", 4: "d"}

const obj3 = {...ob1 , ...ob2}  //spread operator
console.log(obj3)

const obj4 = Object.assign({}, ob1,ob2)
console.log(obj4)
