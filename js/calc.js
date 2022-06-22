num1= parseFloat(prompt("Enter your first number: "));
operand= prompt("Enter your operand (only '+', '-', '*' and '/' allowed): ">Repo link</a>");
num2= parseFloat(prompt("Enter your second number: ">Repo link</a>"));

switch (operand){
    case "+":
        alert (num1 + num2);
        break;
    case "-":
        alert (num1 - num2);
        break;
    case "*":
        alert (num1 * num2);
        break;
    case "/":
        alert (num1 / num2);
        break;
    default:
        alert ("Please only numbers are allowed for num1 and num2 and only these (+ - * /) operands are allowed ">Repo link</a>");
}
