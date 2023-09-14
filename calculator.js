
// //let num1 = prompt("Enter first number");
// num1 =Number(num1);
// //let symbol = prompt("Enter mathematical operater");
// //let num2 = prompt("Enter second number");
// num2 =Number(num2);

let num1 = 5;
let symbol = "-";
let num2 = 12

if(symbol == "+"){
  console.log(num1, symbol , num2, "=", num1 + num2);
}
else if(symbol == "-"){
  console.log(num1, symbol, num2, "=", num1 - num2);

}
else if (symbol == "*"){
  console.log(num1 , symbol, num2, "=", num1 * num2);
}
else if (symbol == "/"){
  console.log(num1 , symbol, num2 , "=", num1 / num2);
}
else if (symbol == "%"){
  console.log(num1 , symbol , num2 , "=", num1 % num2);
}
else {
  console.log(symbol, "is not any mathematical operation")
}
