function test() {
    var a = "3";
    var b = "8";
    [a,b] = [b,a];
    console.log("a is equal to " + a);
    console.log("b is equal to " + b);
}
test()


word= "Hello World"
console.log(word.length)

var text= prompt("Enter your blogpost \(not more than 180 characters\):");
c= 180-text.length
alert("You have entered " + text.length + " characters, you have " + c + " characters left");

var names = ["Yino", "Rhino", "Muhammed"];
names.length;
names.includes("Yino");

Math.random()*3;
Math.floor(2.67)

output=[];
output.push(100);
output.pop;


function fizzBuzz(output) {
    output.push(output.length+1);
    console.log(output);
}
fizzBuzz(output);


x=1;
while (x < 100){
if (x%3===0 && x%5===0){
    console.log("FizzBuzz");
}
else if(x%3===0){
    console.log("Fizz");
}
else if(x%5===0){
    console.log("Buzz");
}
else{
   console.log(x);
    
}
x++
}

for(var i=0; i<101; i++){
    console.log(i)
}


function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆
    
    //Write your code here:
    var output=[0,1];
    if (n===1){
        output=[0]
    }
    else if (n===2){
        output= [0,1]
    }
    else{
        for(var i=2; i<n; i++){
        var lastIndex= output.length-1;
        output.push(output[lastIndex] + output[lastIndex-1]);
            }
        }
    //Return an array of fibonacci numbers starting from 0.
    return output
//Do NOT change any of the code below 👇
}