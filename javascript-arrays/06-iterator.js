// Array iterator functions can apply a function to each element of an array

// The forEach() function takes a function as an argument and applies the
// called function to each element of an array
function square(num) {
   console.log(num, num * num);
}
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
nums.forEach(square);

// OUTPUT
// 1 - 1
// 2 - 4
// 3 - 9
// 4 - 16
// 5 - 25
// 6 - 36
// 7 - 49
// 8 - 64
// 9 - 81
// 10 - 100


// The every() function applies a Boolean function to an array and returns
// true if the function can return true for every element in the array

// In this example, we use the every() method to check if every element in the array
// is an even number

function isEven(numbers) {
   return numbers % 2 == 0;
}
var numbers = [2, 4, 6, 8, 10];
var even = numbers.every(isEven);
if (even) {
   console.log("All numbers are even.");
} else {
   console.log("Not all numbers are even.");
}


// OUTPUT
// All numbers are even.


// The some() function takes a Boolean function and returns true if at least
// one of the elements meets the criteria of the Boolean function

// In this example, we'll use the some() method to check if one of the
// elements in the array is an even number with some help from the previous
// functions above

var numz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var someEven = nums.some(isEven);
if (someEven) {
   console.log("Some numbers are even!");
} else {
   console.log("No numbers are even!");
}

// OUTPUT
// Some numbers are even!
