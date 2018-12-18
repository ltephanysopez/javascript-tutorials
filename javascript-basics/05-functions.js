// JavaScript can define both value-returning funtcions and void-returning functions

function factorial(number) {
   var product = 1;
   for(var i = number; i >= 1; --i) {
      product *= i;
   }
   return product;
}

console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(10));
console.log(factorial(20));


// Function that operates on values
function curve(arr, amount) {
   for(var j = 0; j < arr.length; ++j) {
      arr[j] += amount;
   }
}

var grades = [77, 73, 74, 81, 90, 34, 21, 12, 34, 54,];
curve(grades, 5);
console.log(grades);


// Recursion!

function torial(num) {
   if (num == 1)
   return num;
   else
   return num * torial(num - 1);
}

console.log(torial(5));
console.log(torial(15));
console.log(torial(25));
console.log(torial(50));
