// To execute a set of statement when a condition is true, use a while loop!
var number = 1;
var sum = 0;

while (number < 11) {
   sum += number;
   ++number;
   console.log(number);
}
console.log(sum);


// To execute a set of statements a specified number of times, use a for loop
var i = 1;
var total = 0;
for (var i = 1; i < 11; i++) {
   total += i;
   console.log(total);
}
console.log(total);

// For loops are used frequently to access the elements of an array, as shown below

var a = [31, 17, 12, 22, 100, 1, 2, 3, 4, 4, 5, 65, 6, 7, 78, 999]
var b = 0;
for (var j = 0; j < a.length; j++) {
   b += a[j];
   console.log(b);
}
console.log(b);
