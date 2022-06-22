num1= parseFloat(prompt("Enter your first number: \n<a href="https://github.com/Yinotherhino/jscalc">Repo link</a>"));
operand= prompt("Enter your operand (only '+', '-', '*' and '/' allowed): \n<a href="https://github.com/Yinotherhino/jscalc">Repo link</a>");
num2= parseFloat(prompt("Enter your second number: \n<a href="https://github.com/Yinotherhino/jscalc">Repo link</a>"));

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
        alert ("Please only numbers are allowed for num1 and num2 and only these (+ - * /) operands are allowed \n <a href="https://github.com/Yinotherhino/jscalc">Repo link</a>");
}
