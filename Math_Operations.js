num1=10; num2=20;
sum=num1+num2; console.log("Addition "+sum);
sub=num2-num1; console.log("Sub "+sub);
div=num1/num2; console.log("Div "+div);
mul=num1*num2; console.log("Mult "+mul);
console.log("Reminder "+num1%num2);





// INCREMENTOR
 var a = 5;
 var b = ++a; // a is incremented before assignment
console.log(a, b); // 6, 6

var a = 5;
var b = a++; // a is incremented after assignment
console.log(a, b); // 6, 5

// DECREMENTOR
var a = 5;
var b = --a; // a is decremented before assignment
console.log(a, b); // 4, 4

var a = 5;
var b = a--; // a is decremented after assignment
console.log(a, b); // 4, 5

// EXPONENTIATION
// a ** b produces the same result as Math.pow(a,b):
var a = 5;
var b = a ** 2;
console.log(b); // 25

// Calculate total after tax to two decimal places
const price = 26.5;    // Price of item before tax
const taxRate = 0.082; // 8.2% tax rate
let totalPrice = price + (price * taxRate);
let fixedPrice = totalPrice.toFixed(2);

console.log("Total:", fixedPrice);