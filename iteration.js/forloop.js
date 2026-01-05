// for (let i=1; i<=10 ; i++){
//     console.log(i);   
// }

// for (let i=0; i<10 ;i++){
//     process.stdout.write(i + " ")
// }

// for (let i=1; i<=10 ; i++){
//     const element = i;
//     if(element == 2){
//         console.log(`Today is ${element} of jan 2026`)
//     }
//     console.log(element);   
// }

// for (let i=1; i<=10 ; i++){
//     console.log(`Table of: ${i}`)
//     for(let j=1;j<=10 ; j++){
//         console.log(i + '*' + j + '=' + i*j)
//     }   
//     console.log(" ")
// }

// for(let i = 0 ; i<=5; i++){
//     if (i == 4){
//         console.log(`value is ${i}`)
//         break
//     }
//     console.log(i)
// }

for(let i = 0 ; i<=5; i++){
    if (i == 4){
        console.log(`continue skip this ${i} value`)
        continue
    }
    console.log(i)
}