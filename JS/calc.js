num1= parseFloat(prompt("Enter your first number: "));
operand= prompt("Enter your operand (only '+', '-', '*' and '/' allowed): ");
num2= parseFloat(prompt("Enter your second number: "));
let result;
switch (operand){
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 * num2;
        break;
    case "+":
        result = num1 / num2;
        break;
    default:
        result= "Please only numbers are allowed for num1 and num2 and only these (+ - * /) operands are allowed"
}
alert(result)