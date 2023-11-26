console.log("Rainy day")
// 2
let age = 19;
age = 21;
console.log(age, typeof age)
// 3
let world = "Good"// string
console.log(world, typeof world)
let denny = null
console.log(denny, typeof denny)
let very = true;
console.log(very, typeof very)
// 4
let sweet = 10.1;
console.log(sweet, typeof sweet)
// arithmetic opperater
let number1 = 22;
let number2 = 11;
console.log( "Additionm of numbers is", number1 + number2);
console.log( "Substraction of numbers is",number1 - number2);
console.log(  "Multiplication of numbers is" , number1 * number2);
console.log( "Division of numbers is" ,  number1 / number2)
console.log(5/2)
console.log(5%2)
console.log(7%2)
console.log(7%4)
let a = "hello"
let b = "world"
console.log(a += b)

let num1 = 1;
let num2= 2;
num1 = num1+num2;


num2/=num1;
console.log(num2)

// comparasion operators
let bindiyaAge = "23"
let avinashAge  = 23;
let answer = bindiyaAge == avinashAge; //equal to 
console.log(answer)

answer = bindiyaAge != avinashAge;   // not equal to 
console.log(answer)

answer = bindiyaAge > avinashAge  // greater than 
console.log(answer)

answer = bindiyaAge < avinashAge   // less than
console.log(answer)

answer = bindiyaAge >= avinashAge   // greater than or equal to
console.log(answer)

answer = bindiyaAge <= avinashAge    // less than or equal to
console.log(answer)

answer = bindiyaAge === avinashAge    // equal value or equal type
console.log(answer)

answer = bindiyaAge !== avinashAge     // not equal value or not equal type
console.log(answer)

// javascript string operators

let text1 = "Bindiya is learning ";
let text2 = "javascript";

answer = text1 < text2;
console.log(answer)

answer = text1 > text2;
console.log(answer)

// String Addition
answer = text1+text2;
console.log(answer)

text1+=text2
console.log(text1)

// logical operators

let name1 = "avinash";
let  password = "12345";
answer = name1 == "avinash"  && !(password == "12345")  // logical and
console.log(answer)

answer =  !(name1 == "avinashqq") || !(password == "1236") // logical or
console.log(answer) 

// conditional statement

// variable containing number from 1 - 30
// Number belongs to category of 1- 10
// Number belong to category 11 -20  
// Number belong to category 21 -30

// variable containing number from 1 - 100
// Program should tell number is greater than 50 or less than 50

let number3 = 60
if(number3 > 50){
    console.log(number3, " is greater than 50")
}
else if(number3 == 50){
console.log(number3, " is equal to 50")
}

else{
    console.log(number3, " is less than 50" )
}

// check number is even or odd
// If number is completely divisible by 2 it is even 

// 4/2 = 2 
// 4%2 = 0

// 6/2 =  3
// 6%2 = 0  even

// 7%2 = 1  Odd
// 1324560

let number4 = 1018765121;
if(number4%2 == 0){
    console.log("The number is even")
}
else {
    console.log("The number is odd")
}

//
let number5 = 31;
if(number5%9 == 0){
    console.log("yes")
}
else{
    console.log("No")
}
// Create two variables and check which one is greater

let num3 = 9;
let num4 = 21;
if(num3 > num4){
    console.log("The number is greater" , num3)
}
else{
    console.log("The number is less", num3)
}

// create three vraibles and check which one is greater

let num5 = 100;
let num6 = 150;
let num7 = 90;
if(num5 > num6 && num5 > num7){
    console.log(num5, "is greater")
}
else if(num6 > num5 && num6 > num7){
    console.log(num6, "is greater")
}
else if(num7 > num5 && num7 > num6){
    console.log(num7, "is grater")
}


// create a variable marks 
// if marks less than 50 fail
// if marks greater than 70 pass with grade A
// if marks 50 to 70 pass with grade B
// hint < > and  && 


// day of week
// 1 - monday
// 2- tuesday
// hint : ==
























































































