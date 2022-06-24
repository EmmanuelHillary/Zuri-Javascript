console.log("\t\tJS Calculator");
let value = parseInt(prompt("Divison ==> (1)\nMultiplication ==> (2)\nAddition ==> (3)\nSubtraction ==> (4)\nEnter Arithmetic operation: "), 10);
if (value === 1 || value === 2 || value===3 || value===4){
  let num1 = parseInt(prompt("Enter first value: "), 10);
  let num2 = parseInt(prompt("Enter second value: "), 10);
  if (value===1){
    console.log("result: ", num1/num2)
  }else if (value===2){
    console.log("result: ", num1*num2)
  }else if (value===3){
    console.log("result: ", num1+num2)
  }else if (value===4){
    console.log("result: ", num1-num2)
  }
}
else{
  console.log("invalid operation")
}
