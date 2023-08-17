

// for (let i = 0; i < 10; i+=2){
//     console.log(i)
// }

// for (let i = 0; i >= -20; i--){
//     console.log(i)
// }

// for(let i = 0; i < 4; i++){
//     console.log("Hello world"); // 0 1 2 3 
// }
// for(let i = 6; i >= 5; i--){
//     console.log("game");
// }

// i = 6
// 6 >= 5 ? True
// game
// i-- -> i = 5
// 5 >= 5 ? True
// game
// i-- -> i = 4
// 4 >= 5? False

// for (let i = 3; i <  11; i++){
//     console.log(i)
//}
//i = 3
// 3 < 11 ? true 
/// print 3
// i++ -> i = 4
// 4 < 11 True
// print 4
//i++ -> i = 5
// 5 < 11 true
// print 5 
//i++ -> i= 6
// 6 < 11? True
// print 6
// i++ -> i = 7
// 7 < 11 ? True
// print 7
// i++ -> i = 8 
// 8 < 11? true
// print 8
// i++ -> i = 9
// 9 < 11? true 
//print 9 
// i++ -> i = 10
// 10 < 11? true
// print 10
// i++ -> i = 11 
// 11 < 11 ? false
// //end loop out









for (let i = 5; i >= 0; i--){
    console.log("hello",i)
}
// i = 5
// 5 >= 0? true
// print Hello , 5
// i-- -> i = 4
// 4 >= 0? true
// print Hello , 4
// i-- -> i = 3
// 3 >= 0/ true
// print Hello , 3
// i-- -> i = 2
// 2 >= 0? true
//print Hello , 2
// i -- -> i = 1
// 1 >= 0? true
// print Hello , 1
// i-- -> i = 0
// 0 >= 0? true
// print Hello , 0
// i-- -> i = -1
//  -1 >= 0? false
// end loop


// infinite loop 
for (let i = 1; i < 0; i++){
    console.log(i)
}
// i = 1
// 1 > 0? 

// print 1
// i++ -> i = 2
// 2 > 0? true
// print 2
// i++ -> i = 3
// 3 > 0? true
// print 3
// 


for (let i = -7; i >= -7; i--){
    console.log(i);
}
// i = -7
// -7 >= -7? true
// print -7
// i++ -> i = -6
// -6 >= -7? true
// print -6
// i++ -> i = -5
// -5 >= -7? true
// print -5
// i++ -> i = -4
//-4 >= -7? true
//print -4
//...
// i = -7
// -7 >= -7? true
// print -7
// i-- -> i = -8
// -8 >= -7? false
// end loop

console.log("first loop")
for (let i =1; i <= 10; i++){
    console.log(i);
}

console.log("second loop")

for (let i = 2; i <= 20; i +=2){
    console.log(i);
}
console.log("third loop")
for (let i = 11; i <= 30; i += 2){
    console.log(i);

}
// i = 11
//11 <= 30? true
// print 11
//i + 2 -> i = 13
//13 <= 30? true
//print 13
//i + 2 -> i = 15
// 15 <= 30?true
// print 15
// i + 2 -> i = 17
// 17 <= 30? true
// print 17





















console.log("fourth loop start")
for (let i = 10; i <= 1; i--){
console.log(i);
}
// i  = 10
//10 <= 1? false
console.log("fourth loop end")





console.log("sum program")
let sum = 0;
for (let i = 1; i <= 15; i++){
    sum += i; // 0+1+2+3+4+5 = 15
}
console.log(sum);

// sum = 0
//i = 1
// 1 <= 5? true
// sum + 1 -> sum = 1
//i++ -> i = 2
//2 <= 5? true
//sum + 2 -> sum = 3
//i++ -> i = 3
//3 <= 5? true
//sum + 3 -> sum = 6
//i++ -> i = 4
// 4 <= 5? true
//sum + 4 -> sum = 10
//i++ -> i = 5
//5 <= 5? true
//sum + 5 -> sum = 15
//i++ -> i = 6
//6 <= 5? false
//print 15




















let num = 14;
for (let i = 1; i <= 10; i++){
    console.log(num, 'x',i,'=',num*i);
}
//num= 7
// i = 1
//1 <= 3? true
//print 7 X 1 = 7
//i++ -> i = 2
//2 <= 3? true
// print 7 X 2 = 14
//i++ -> i = 3
// 3 <= 3?true
// print 7 X 3 = 21
//i++ -> i = 4
//4 <= 3? true
// ...












// factorial = 5! => 1 x 2 x 3 x 4 x 5
// 10! = 1 x 2 x 3 ... 10
console.log("factorial ")
const num2 = 4;
let factorial = 1;
for (let i = 1; i <= num2; i++){
    factorial *= i;
}
console.log(factorial);
//num2 = 4
//factorial = 1
//i = 1
//1 <= 4?true
//factorial*i -> 1 * 1  -> factorial = 1
//i++ -> i = 2
//2 <= 4? true
//factorial*i -> 1 * 2 -> factorial = 2
//i++ -> i = 3
//3 <= 4?true
//factorial*i -> 2 * 3 -> factorial = 6
//i++ -> i = 4
//4 <= 4?true
//factorial*i -> 6 * 4 -> factorial = 24
//i++ -> i = 5
//5 <= 4?false
//print 24

for(let i = 10; i > 0; i--){
    console.log(i)
}
//i = 10
//10 > 0?true
//print 10
// i-- -> i = 9
//9 > 0?true
//print 9
// i-- -> i = 8
//8 > 0?true
//print 8
//i-- -> i = 7
//7 > 0?true
//print 7
//...


for(let i = 20; i >= 0; i-= 2){
    console.log(i)
}


for(let i = 3; i <= 30; i+= 3){
    console.log(i)
}
//i = 3
// 3 <= 30?true
//print 3
//i+= 3 -> i = 6
//6 <= 30?true
//print 6
//... 












// 3 6 9 12 15 18 






















































// const fruits = [ 'apple', 'banana', 'orange', 'grape'];
// for (let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }
// const numbers4 = [10, 5, 25, 8, 15];
// let max = numbers4[0];
// for (let i = 1; i < numbers4. length; i++){
//     if (numbers4[i] > max){
//         max = numbers4[i];
//         console.log(max);
    



//     }
// } 



















   













































